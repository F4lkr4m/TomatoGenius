import React from 'react';
import '../SignForm.css';
import Fonts from '../../Fonts/Fonts';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

interface SignUpFormProps {
  submit?: (email: string, password: string) => void;
}

class SignUpForm extends React.Component<SignUpFormProps> {
  constructor(props: SignUpFormProps) {
    super(props);
  }

  render() {
    return (
      <div className={'form'}>
        <Fonts type="h3" text="Регистрация" />
        <Input type="text" placeholder="username" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="verify password" />
        <Button label="Стать гением!" type={'filled'} wide={true} />
      </div>
    );
  }
}

export default SignUpForm;
