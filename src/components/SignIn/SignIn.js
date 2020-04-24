import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { googleSignInStart } from '../../redux/actions/userActions';
import { auth } from '../../firebase/firebase.utils';
import { SignInContainer, Title, ButtonsContainer } from './SignIn.styles';
import { connect } from 'react-redux';
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error.message);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <Title> I already have an account</Title>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            handleChange={this.handleChange}
            label='email'
            value={this.state.email}
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            label='password'
            handleChange={this.handleChange}
            required
          />
          <ButtonsContainer>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});
export default connect(null, mapDispatchToProps)(SignIn);
