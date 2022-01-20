import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDo.css';

interface ToDoProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  label: string | undefined;
  text: string | undefined;
  id: string;
  deleted?: boolean;
}

const ToDo = (props: ToDoProps) => {
  return (
    <div id={props.id} onClick={props.onClick} className={`todo + ${props.deleted ? ' todo--deleted' : ''}`}>
      <Fonts type="h3" text={props.label} />
      <Fonts type="p" secondary={true} text={props.text} />
    </div>
  );
};

export default ToDo;
