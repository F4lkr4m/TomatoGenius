import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';
import Accordion from '../Accordion/Accordion';
import { genId } from '../../Utils/IdGenerator';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import ToDo, { ToDoProps } from '../ToDo/ToDo';

interface ToDoListI {
  textareaValue: string;
  inputValue: string;
}

class ToDoList extends React.Component<unknown, ToDoListI> {
  tasksAccordion: React.RefObject<Accordion>;
  doneTasksAccordion: React.RefObject<Accordion>;
  tasks: Map<string, ToDoProps>;
  doneTasks: Map<string, ToDoProps>;

  constructor(props: unknown) {
    super(props);
    this.tasksAccordion = React.createRef();
    this.doneTasksAccordion = React.createRef();
    this.tasks = new Map();
    this.doneTasks = new Map();

    this.state = {
      textareaValue: '',
      inputValue: '',
    };
  }

  private addTask = () => {
    const label = this.state.inputValue;
    const text = this.state.textareaValue;
    const index = String(genId.next().value);
    this.tasks.set(index, {
      id: index,
      label: label,
      text: text,
    });
    this.tasksAccordion.current?.addItem(
      <ToDo onClick={this.deleteTask} id={index} key={index} label={label} text={text} />,
    );

    this.setState({
      textareaValue: '',
      inputValue: '',
    });
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

  private textAreaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      textareaValue: event.target.value,
    });
  };

  private inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.target.value,
    });
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
          <Input
            value={this.state.inputValue}
            onChange={this.inputChangeHandler}
            type="text"
            placeholder="Название задачи"
          />
          <TextArea
            value={this.state.textareaValue}
            onChange={this.textAreaChangeHandler}
            placeholder="Описание задачи"
          />
          <Button onClick={this.addTask} type="filled" wide={true} label="Добавить" />
        </div>
      </div>
    );
  }
}

export default ToDoList;
