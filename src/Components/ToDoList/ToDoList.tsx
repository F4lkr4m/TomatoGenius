import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';
import Accordion from '../Accordion/Accordion';
import { genId } from '../../Utils/IdGenerator';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import ToDo from '../ToDo/ToDo';

interface ToDoListI {
  textareaValue: string;
  inputValue: string;
  tasks: Array<JSX.Element>;
  doneTasks: Array<JSX.Element>;
}

class ToDoList extends React.Component<unknown, ToDoListI> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      textareaValue: '',
      inputValue: '',
      tasks: [],
      doneTasks: [],
    };
  }

  private addTask = () => {
    const label = this.state.inputValue;
    const text = this.state.textareaValue;
    const index = String(genId.next().value);
    const newTasksArray = this.state.tasks;
    newTasksArray.push(
      <ToDo deleted={false} onClick={this.deleteTask} id={index} key={index} label={label} text={text} />,
    );
    this.setState({
      textareaValue: '',
      inputValue: '',
      tasks: newTasksArray,
    });
  };

  private deleteTask = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    const id = currentTarget.id;

    const newTasksArray = this.state.tasks.filter((task) => {
      return task.key !== id;
    });
    const taskForDelete = this.state.tasks.find((task) => {
      return task.key === id;
    });
    const newDoneTasksArray = this.state.doneTasks;
    if (taskForDelete) {
      newDoneTasksArray.push(taskForDelete);
    }

    this.setState({
      tasks: newTasksArray,
      doneTasks: newDoneTasksArray,
    });
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
          <Accordion items={this.state.tasks} label="Задачи" />
          <Accordion items={this.state.doneTasks} label="Сделано" />
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
