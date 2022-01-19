import React from 'react';
import '../SignForm.css';
import Fonts from '../../Fonts/Fonts';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

interface SignInFormProps {
  submit?: (email: string, password: string) => void;
}

class SignInForm extends React.Component<SignInFormProps> {
  constructor(props: SignInFormProps) {
    super(props);
  }

  render() {
    return (
      <div className={'form'}>
        <Fonts type="h3" text="Вход" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button label="Начать работу!" type={'filled'} wide={true} />
      </div>
    );
  }
}

export default SignInForm;
