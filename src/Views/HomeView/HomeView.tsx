import React from 'react';
import PomodoroTimer from '../../Components/PomodoroTimer/PomodoroTimer';
import ToDoList from '../../Components/ToDoList/ToDoList';
import './HomeView.css';

class HomeView extends React.Component<unknown> {
  render() {
    return (
      <div className={'home-view__layout'}>
        <div className={'home-view__content'}>
          <PomodoroTimer />
        </div>
        <ToDoList />
      </div>
    );
  }
}

export default HomeView;
