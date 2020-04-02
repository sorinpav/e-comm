import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInRegisterPage from './pages/signInRegister/SignInRegisterPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import ContactPage from './pages/contact/ContactPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/Auth';
import { setCurrentUser } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';
import { createStructuredSelector } from 'reselect';
class App extends Component {
  unsubscribe = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInRegisterPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
