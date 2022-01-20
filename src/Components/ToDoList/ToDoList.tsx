import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';
import Accordion from '../Accordion/Accordion';
import { genId } from '../../Utils/IdGenerator';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import ToDo, { ToDoProps } from '../ToDo/ToDo';

class ToDoList extends React.Component<unknown> {
  textarea: React.RefObject<TextArea>;
  input: React.RefObject<Input>;
  tasksAccordion: React.RefObject<Accordion>;
  doneTasksAccordion: React.RefObject<Accordion>;
  tasks: Map<string, ToDoProps>;
  doneTasks: Map<string, ToDoProps>;

  constructor(props: unknown) {
    super(props);
    this.textarea = React.createRef();
    this.input = React.createRef();
    this.tasksAccordion = React.createRef();
    this.doneTasksAccordion = React.createRef();
    this.tasks = new Map();
    this.doneTasks = new Map();
  }

  private addTask = () => {
    const label = this.input.current?.value;
    const text = this.textarea.current?.value;
    const index = String(genId.next().value);
    this.tasks.set(index, {
      id: index,
      label: label,
      text: text,
    });
    this.tasksAccordion.current?.addItem(
      <ToDo onClick={this.deleteTask} id={index} key={index} label={label} text={text} />,
    );
    if (this.input.current && this.textarea.current) {
      this.input.current.value = '';
      this.textarea.current.value = '';
    }
  };

  private deleteTask = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    const id = currentTarget.id;

    this.tasksAccordion.current?.deleteItem(id);
    const deletedTask = this.tasks.get(id);
    this.tasks.delete(id);
    if (deletedTask) {
      this.doneTasksAccordion.current?.addItem(
        <ToDo id={id} deleted={true} text={deletedTask.text} label={deletedTask.label} />,
      );
    }
  };

  render(): React.ReactNode {
    return (
      <div className="todo-list">
        <Fonts type="h2" text="Задачи" />
        <div className="todo-list__list">
          <Accordion ref={this.tasksAccordion} label="Задачи" />
          <Accordion ref={this.doneTasksAccordion} label="Сделано" />
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
