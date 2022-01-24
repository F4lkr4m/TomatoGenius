import React from 'react';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';
import Accordion from '../Accordion/Accordion';
import { genId } from '../../Utils/IdGenerator';
import Input from '../Input/Input';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import store, { RootReducer } from '../../Store/store';
import { addToDo, ToDoAction, toggleToDo } from '../../Store/ActionCreators/ToDoListActionCreator';
import { Store, Unsubscribe } from 'redux';
import { ToDoI } from '../../Store/Reducers/ToDoListReducer';
import ToDo from '../ToDo/ToDo';

interface ToDoListProps {
  store: Store<RootReducer, ToDoAction>;
}

interface ToDoListI {
  textareaValue: string;
  inputValue: string;
  tasks: Array<ToDoI>;
}

class ToDoList extends React.Component<ToDoListProps, ToDoListI> {
  unsub: Unsubscribe | undefined;
  constructor(props: ToDoListProps) {
    super(props);
    this.state = {
      textareaValue: '',
      inputValue: '',
      tasks: [],
    };
    this.unsub = undefined;
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => {
      this.setState({
        tasks: this.props.store.getState().todos.todos,
      });
    });
  }

  componentWillUnmount() {
    if (this.unsub) {
      this.unsub();
    }
  }

  private addTask = () => {
    const label = this.state.inputValue;
    const text = this.state.textareaValue;
    const index = String(genId.next().value);
    store.dispatch(
      addToDo({
        label: label,
        text: text,
        id: index,
      }),
    );

    this.setState({
      inputValue: '',
      textareaValue: '',
    });
  };

  private toggleToDo = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    const id = currentTarget.id;
    store.dispatch(toggleToDo({ id: id }));
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
    const todos = this.state.tasks.filter((todo) => {
      return !todo.completed;
    });
    const jsxTodos = todos.map((todo) => {
      return <ToDo onClick={this.toggleToDo} label={todo.label} key={todo.id} id={todo.id} text={todo.text} />;
    });
    const completedTodos = this.state.tasks.filter((todo) => {
      return todo.completed;
    });
    const jsxCompletedTodos = completedTodos.map((todo) => {
      return (
        <ToDo onClick={this.toggleToDo} deleted={true} label={todo.label} key={todo.id} id={todo.id} text={todo.text} />
      );
    });

    return (
      <div className="todo-list">
        <Fonts type="h2" text="Задачи" />
        <div className="todo-list__list">
          <Accordion items={jsxTodos} label="Задачи" />
          <Accordion items={jsxCompletedTodos} label="Сделано" />
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
