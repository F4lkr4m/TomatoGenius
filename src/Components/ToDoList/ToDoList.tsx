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

interface TaskProps {
  label: string;
  text: string;
  id: string;
}

// Костыльное решение задачи о зачеркнутом тексте...
// Ну зато хоть на React.CSSProperties посмотрел
const deletedTextDecoration: React.CSSProperties = {
  textDecoration: 'line-through',
};

class ToDoList extends React.Component<unknown, ToDoListI> {
  tasksProps: Array<TaskProps>;
  deletedTasksProps: Array<TaskProps>;
  constructor(props: unknown) {
    super(props);

    this.state = {
      textareaValue: '',
      inputValue: '',
      tasks: [],
      doneTasks: [],
    };
    this.tasksProps = [];
    this.deletedTasksProps = [];
  }

  // На моменте локал стораджа тут помойка ппц, лучше не смотреть сюда
  // А вообще тут промах был по архитектуре, наверное бросать внутрь
  // Аккордиона верстку не самая лучшая мысль, даже если брать компоненты
  componentDidMount() {
    const localTasks = localStorage.getItem('tasks');
    if (localTasks) {
      const parsedTasks: Array<TaskProps> = JSON.parse(localTasks);
      const newTasksArray: Array<JSX.Element> = [];
      parsedTasks.forEach((task) => {
        const label = task.label;
        const text = task.text;
        const index = task.id;
        this.tasksProps.push({
          label: label,
          text: text,
          id: index,
        });
        newTasksArray.push(
          <ToDo deleted={false} onClick={this.deleteTask} id={index} key={index} label={label} text={text} />,
        );
      });
      this.setState({
        textareaValue: '',
        inputValue: '',
        tasks: newTasksArray,
      });
    } else {
      localStorage.setItem('tasks', JSON.stringify(this.tasksProps));
    }

    const localDeletedTasks = localStorage.getItem('deletedTasks');
    if (localDeletedTasks) {
      const parsedDeletedTasks: Array<TaskProps> = JSON.parse(localDeletedTasks);
      const newDoneTasksArray: Array<JSX.Element> = [];
      parsedDeletedTasks.forEach((task) => {
        const label = task.label;
        const text = task.text;
        const index = task.id;
        this.deletedTasksProps.push({
          label: label,
          text: text,
          id: index,
        });
        newDoneTasksArray.push(<ToDo deleted={true} id={index} key={index} label={label} text={text} />);
      });
      this.setState({
        textareaValue: '',
        inputValue: '',
        doneTasks: newDoneTasksArray,
      });
    } else {
      localStorage.setItem('deletedTasks', JSON.stringify(this.deletedTasksProps));
    }
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
    this.tasksProps.push({
      label: label,
      text: text,
      id: index,
    });
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(this.tasksProps));
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
      newDoneTasksArray.push(<div style={deletedTextDecoration}>{taskForDelete}</div>);
    }

    this.setState({
      tasks: newTasksArray,
      doneTasks: newDoneTasksArray,
    });
    const founded = this.tasksProps.find((task) => {
      return task.id === id;
    });
    console.log(this.tasksProps);
    this.tasksProps = this.tasksProps.filter((task) => {
      return task.id !== id;
    });
    console.log(this.tasksProps);
    if (founded) {
      this.deletedTasksProps.push({
        label: founded.label,
        text: founded.text,
        id: founded.id,
      });
      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(this.tasksProps));
      localStorage.removeItem('deletedTasks');
      localStorage.setItem('deletedTasks', JSON.stringify(this.deletedTasksProps));
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
