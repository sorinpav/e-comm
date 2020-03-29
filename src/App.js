import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInRegisterPage from './pages/signInRegister/SignInRegisterPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/Auth';
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() }
          });
        });
      }
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
