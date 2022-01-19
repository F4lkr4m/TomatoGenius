import React from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  wide?: boolean;
  icon?: string;
  hover?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`button` + `${props.wide ? ' button--wide' : ''}` + `${props.hover ? ' button--hover' : ''}`}>
      {props.icon ? <img className={'button__icon'} src={props.icon} /> : ''}
      {props.label}
    </button>
  );
};

export default Button;
