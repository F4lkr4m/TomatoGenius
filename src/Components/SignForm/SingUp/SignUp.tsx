import React from 'react';
import '../SignForm.css';
import Fonts from '../../Fonts/Fonts';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Snackbar from '../../Snackbar/Snackbar';
import { validateEmail, validatePassword, validatePasswordMatch, validateUsername } from '../../../Utils/Validation';

interface SignUpFormProps {
  submit?: (email: string, password: string) => void;
  snack: React.RefObject<Snackbar>;
}

interface SignUpFormState {
  email: string;
  username: string;
  password: string;
  passwordRepeat: string;
}

class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
  constructor(props: SignUpFormProps) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordRepeat: '',
    };
  }

  private validate = () => {
    const emailValidation = validateEmail(this.state.email);
    const passwordValidation = validatePassword(this.state.password);
    const passwordMatchValidation = validatePasswordMatch(this.state.password, this.state.passwordRepeat);
    const usernameValidation = validateUsername(this.state.username);

    let errorMessage = '';
    if (!emailValidation.result) {
      errorMessage += emailValidation.error + '\n';
    }
    if (!passwordValidation.result) {
      errorMessage += passwordValidation.error + '\n';
    } else if (!passwordMatchValidation.result) {
      errorMessage += passwordMatchValidation.error + '\n';
    }
    if (!usernameValidation.result) {
      errorMessage += usernameValidation.error + '\n';
    }
    console.log(errorMessage);
    this.props.snack.current?.open(errorMessage);
  };

  private handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
    });
  };

  private handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  };

  private handlePasswordRepeat = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      passwordRepeat: event.target.value,
    });
  };

  private handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className={'form'}>
        <Fonts type="h3" text="Регистрация" />
        <Input type="text" onChange={this.handleUsername} placeholder="username" />
        <Input type="email" onChange={this.handleEmail} placeholder="email" />
        <Input type="password" onChange={this.handlePassword} placeholder="password" />
        <Input type="password" onChange={this.handlePasswordRepeat} placeholder="verify password" />
        <Button onClick={this.validate} label="Стать гением!" type={'filled'} wide={true} />
      </div>
    );
  }
}

export default SignUpForm;
