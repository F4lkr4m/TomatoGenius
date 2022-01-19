import React from 'react';
import './Input.css';

interface InputProps {
  type: 'text' | 'tel' | 'email' | 'number';
  placeholder: string;
}

const Input = (props: InputProps) => {
  return (
    <label>
      <input className="input" type={props.type} placeholder={props.placeholder} />
    </label>
  );
};

export default Input;
