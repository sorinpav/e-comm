import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInRegisterPage from './pages/signInRegister/SignInRegisterPage';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
