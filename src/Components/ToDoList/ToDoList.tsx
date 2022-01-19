import React from 'react';
import Button from '../Button/Button';
import Fonts from '../Fonts/Fonts';
import './ToDoList.css';

class ToDoList extends React.Component<unknown> {
  render(): React.ReactNode {
    return (
      <div className="todo-list">
        <Fonts type="h2" text="Задачи" />
        <div className="todo-list__list">
          <div className="todo-list__task">
            <Fonts type="h5" text="* Название задачи" />
            <Fonts type="p" secondary={true} text={'Описание задачи'} />
            <div className="todo-list__button-group">
              <Button label={'Cancel'} type={'filled'} />
              <Button label={'Done'} type={'filled'} />
            </div>
          </div>
          <div className="todo-list__task">
            <Fonts type="h5" text="* Название задачи" />
            <Fonts type="p" secondary={true} text={'Описание задачи'} />
            <div className="todo-list__button-group">
              <Button label={'Cancel'} type={'filled'} />
              <Button label={'Done'} type={'filled'} />
            </div>
          </div>
          <div className="todo-list__task">
            <Fonts type="h5" text="* Название задачи" />
            <Fonts type="p" secondary={true} text={'Описание задачи'} />
            <div className="todo-list__button-group">
              <Button label={'Cancel'} type={'filled'} />
              <Button label={'Done'} type={'filled'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
