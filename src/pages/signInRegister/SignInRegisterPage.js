import React from 'react';
import './SignInRegisterPage.scss';
import { SignIn } from '../../components/SignIn/SignIn';
import { Register } from '../../components/Register/Register';
function SignInRegisterPage() {
  return (
    <div className='sign-in-register'>
      <SignIn />
      <Register />
    </div>
  );
}

export default SignInRegisterPage;
