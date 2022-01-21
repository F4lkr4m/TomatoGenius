import React from 'react';
import './Input.css';

interface InputProps {
  type: 'text' | 'tel' | 'email' | 'number' | 'password';
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
}

const Input = (props: InputProps) => {
  return (
    <label>
      <input
        onChange={props.onChange}
        className="input"
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
      />
    </label>
  );
};

export default Input;
