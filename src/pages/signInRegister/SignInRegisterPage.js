import React from 'react';
import './SignInRegisterPage.scss';
import { SignIn } from '../../components/SignIn/SignIn';
import { SignUp } from '../../components/SignUp/SignUp';
function SignInRegisterPage() {
  return (
    <div className='sign-in-register'>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInRegisterPage;
