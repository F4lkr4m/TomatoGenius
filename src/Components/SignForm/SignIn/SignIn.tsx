import React from 'react';
import '../SignForm.css';
import Fonts from '../../Fonts/Fonts';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { validateEmail, validatePassword } from '../../../Utils/Validation';
import Snackbar from '../../Snackbar/Snackbar';

interface SignInFormProps {
  submit?: (email: string, password: string) => void;
  snack: React.RefObject<Snackbar>;
}

interface SignInFormState {
  email: string;
  password: string;
}

class SignInForm extends React.Component<SignInFormProps, SignInFormState> {
  constructor(props: SignInFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  private validate = () => {
    const emailValidation = validateEmail(this.state.email);
    const passwordValidation = validatePassword(this.state.password);

    let errorMessage = '';
    if (!emailValidation.result) {
      errorMessage += emailValidation.error + '\n';
    }
    if (!passwordValidation.result) {
      errorMessage += passwordValidation.error + '\n';
    }
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

  render() {
    return (
      <div className={'form'}>
        <Fonts type="h3" text="Вход" />
        <Input type="email" onChange={this.handleEmail} placeholder="email" />
        <Input type="password" onChange={this.handlePassword} placeholder="password" />
        <Button label="Начать работу!" onClick={this.validate} type={'filled'} wide={true} />
      </div>
    );
  }
}

export default SignInForm;
