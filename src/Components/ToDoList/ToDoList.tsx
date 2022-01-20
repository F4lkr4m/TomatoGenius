import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';
import Accordion from '../Accordion/Accordion';

class ToDoList extends React.Component<unknown> {
  render(): React.ReactNode {
    return (
      <div className="todo-list">
        <Fonts type="h2" text="Задачи" />
        <div className="todo-list__list">
          <Accordion label="Задачи" />
          <Accordion label="Сделано" />
        </div>
      </div>
    );
  }
}

export default ToDoList;
