import React from 'react';
import SignInForm from '../../Components/SignForm/SignIn/SignIn';
import SignUpForm from '../../Components/SignForm/SingUp/SignUp';
import './SignView.css';

class SignView extends React.Component<unknown> {
  render(): React.ReactNode {
    return (
      <div className="sign-view__layout">
        <SignUpForm />
        <SignInForm />
      </div>
    );
  }
}

export default SignView;
