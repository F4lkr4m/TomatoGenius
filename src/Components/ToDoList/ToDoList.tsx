import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';
import Accordion from '../Accordion/Accordion';
import { genId } from '../../Utils/IdGenerator';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';

class ToDoList extends React.Component<unknown> {
  textarea: React.RefObject<TextArea>;

  constructor(props: unknown) {
    super(props);
    this.textarea = React.createRef();
  }

  private getValueOfTextArea = () => {
    console.log(this.textarea.current?.value);
  };

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
          <TextArea ref={this.textarea} />
          <Button onClick={this.getValueOfTextArea} type="filled" wide={true} label="Добавить" />
        </div>
      </div>
    );
  }
}

export default ToDoList;
