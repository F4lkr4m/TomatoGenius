import React from 'react';
import './Fonts.css';

interface FontsProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  text?: string;
  secondary?: boolean;
  lineThrough?: boolean;
}

const Fonts = (props: FontsProps) => {
  return (
    <props.type
      className={`${props.secondary ? ' font--secondary' : ''}` + ` ${props.lineThrough ? ' font_line-through' : ''}`}
    >
      {props.text}
    </props.type>
  );
};

export default Fonts;
