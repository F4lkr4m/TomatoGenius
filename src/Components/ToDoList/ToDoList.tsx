import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';
import Accordion from '../Accordion/Accordion';
import { genId } from '../../Utils/IdGenerator';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import ToDo from '../ToDo/ToDo';

class ToDoList extends React.Component<unknown> {
  textarea: React.RefObject<TextArea>;
  input: React.RefObject<Input>;
  tasks: React.RefObject<Accordion>;
  doneTasks: React.RefObject<Accordion>;

  constructor(props: unknown) {
    super(props);
    this.textarea = React.createRef();
    this.input = React.createRef();
    this.tasks = React.createRef();
    this.doneTasks = React.createRef();
  }

  private addTask = () => {
    const label = this.input.current?.value;
    const text = this.textarea.current?.value;
    const index = String(genId.next().value);
    this.tasks.current?.addItem(<ToDo onClick={this.deleteTask} id={index} key={index} label={label} text={text} />);
  };

  private deleteTask = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id;
    this.tasks.current?.deleteItem(id);
  };

  render(): React.ReactNode {
    return (
      <div className="todo-list">
        <Fonts type="h2" text="Задачи" />
        <div className="todo-list__list">
          <Accordion
            ref={this.tasks}
            label="Задачи"
            items={[<Fonts key={String(genId.next())} type="h1" text="kek" />]}
          />
          <Accordion ref={this.doneTasks} label="Сделано" />
        </div>
        <div className="todo-list__form">
          <Input ref={this.input} type="text" placeholder="Название задачи" />
          <TextArea ref={this.textarea} placeholder="Описание задачи" />
          <Button onClick={this.addTask} type="filled" wide={true} label="Добавить" />
        </div>
      </div>
    );
  }
}

export default ToDoList;
