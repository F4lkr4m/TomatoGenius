import React from 'react';
import '../SignForm.css';
import Fonts from '../../Fonts/Fonts';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Snackbar from '../../Snackbar/Snackbar';
import { validateEmail } from '../../../Utils/Validation';

interface SignUpFormProps {
  submit?: (email: string, password: string) => void;
}

class SignUpForm extends React.Component<SignUpFormProps> {
  snack: React.RefObject<Snackbar>;

  constructor(props: SignUpFormProps) {
    super(props);
    this.state = {
      error: '',
    };
    this.snack = React.createRef();
  }

  private validate = () => {
    validateEmail('email');
    this.setState({
      error: 'govno',
    });
    this.snack.current?.open('govno');
  };

  render() {
    return (
      <div className={'form'}>
        <Fonts type="h3" text="Регистрация" />
        <Input type="text" placeholder="username" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="verify password" />
        <Button onClick={this.validate} label="Стать гением!" type={'filled'} wide={true} />
        <Snackbar ref={this.snack} />
      </div>
    );
  }
}

export default SignUpForm;
