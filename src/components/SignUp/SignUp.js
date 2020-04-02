import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { createUserProfileDocument } from '../../firebase/Auth';
import { auth } from '../../firebase/firebase.utils';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, repeatPassword } = this.state;
    if (password !== repeatPassword) {
      window.alert('Passwords do not match.');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        repeatPassword: ''
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2> I don't have an account</h2>
        <span>Sign up with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            handleChange={this.handleChange}
            label='Name'
            value={this.state.displayName}
            required
          />
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
          <FormInput
            type='password'
            name='repeatPassword'
            handleChange={this.handleChange}
            label='Repeat Password'
            value={this.state.repeatPassword}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;