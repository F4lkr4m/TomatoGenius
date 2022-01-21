import React from 'react';
import SignInForm from '../../Components/SignForm/SignIn/SignIn';
import SignUpForm from '../../Components/SignForm/SingUp/SignUp';
import Snackbar from '../../Components/Snackbar/Snackbar';
import './SignView.css';

const snack: React.RefObject<Snackbar> = React.createRef();

class SignView extends React.Component<unknown> {
  render(): React.ReactNode {
    return (
      <>
        <div className="sign-view__layout">
          <SignUpForm snack={snack} />
          <SignInForm snack={snack} />
        </div>
        <Snackbar ref={snack} />
      </>
    );
  }
}

export default SignView;
