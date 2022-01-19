import React from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  wide?: boolean;
  icon?: string;
  type?: 'hover' | 'transparent' | 'filled';
  centered?: boolean;
}

const Button = (props: ButtonProps) => {
  let type: string | undefined = props.type;
  if (!type) {
    type = 'hover';
  }

  return (
    <button
      className={
        `button` +
        `${props.wide ? ' button--wide' : ''}` +
        ` button--${type}` +
        `${props.centered ? ' button--centered' : ''}`
      }
    >
      {props.icon ? <img className={'button__icon'} src={props.icon} /> : ''}
      {props.label}
    </button>
  );
};

export default Button;
