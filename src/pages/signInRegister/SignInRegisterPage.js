import React from 'react';
import { SignIn } from '../../components/SignIn/SignIn';
import { SignUp } from '../../components/SignUp/SignUp';
import { SignInRegisterContainer } from './SignInRegisterPage.styles';
function SignInRegisterPage() {
  return (
    <SignInRegisterContainer>
      <SignIn />
      <SignUp />
    </SignInRegisterContainer>
  );
}

export default SignInRegisterPage;
