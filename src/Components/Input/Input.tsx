import React from 'react';
import './Input.css';

interface InputProps {
  type: 'text' | 'tel' | 'email' | 'number' | 'password';
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <label>
      <input onChange={props.onChange} className="input" type={props.type} placeholder={props.placeholder} />
    </label>
  );
};

export default Input;
