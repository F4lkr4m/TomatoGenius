import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDo.css';

export interface ToDoProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  label: string | undefined;
  text: string | undefined;
  id: string;
  deleted?: boolean;
}

class ToDo extends React.Component<ToDoProps, ToDoProps> {
  constructor(props: ToDoProps) {
    super(props);
    this.state = {
      label: props.label,
      text: props.text,
      id: props.id,
    };
  }

  render(): React.ReactNode {
    return (
      <div
        id={this.props.id}
        onClick={this.props.onClick}
        className={`todo + ${this.props.deleted ? ' todo--deleted' : ''}`}
      >
        <Fonts type="h3" text={this.props.label} />
        <Fonts type="p" secondary={true} text={this.props.text} />
      </div>
    );
  }
}

export default ToDo;
