import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';
import Accordion from '../Accordion/Accordion';
import { genId } from '../../Utils/IdGenerator';
import Input from '../Input/Input';
import Button from '../Button/Button';

class ToDoList extends React.Component<unknown> {
  render(): React.ReactNode {
    return (
      <div className="todo-list">
        <Fonts type="h2" text="Задачи" />
        <div className="todo-list__list">
          <Accordion label="Задачи" items={[<Fonts key={String(genId.next())} type="h1" text="kek" />]} />
          <Accordion label="Сделано" />
        </div>
        <div className="todo-list__form">
          <Input type="text" placeholder="Название задачи" />
          <textarea></textarea>
          <Button type="filled" wide={true} label="Добавить" />
        </div>
      </div>
    );
  }
}

export default ToDoList;
