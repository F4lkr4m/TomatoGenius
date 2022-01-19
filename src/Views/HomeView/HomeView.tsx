import React from 'react';
import Fonts from '../../Components/Fonts/Fonts';
import PomodoroTimer from '../../Components/PomodoroTimer/PomodoroTimer';
import ToDoList from '../../Components/ToDoList/ToDoList';
import './HomeView.css';

class HomeView extends React.Component<unknown> {
  render() {
    return (
      <div className={'home-view__layout'}>
        <div className={'home-view__content'}>
          <PomodoroTimer />
          <Fonts type="p" text="Проведенное время за работой сегодня: 7 h" />
        </div>
        <ToDoList />
      </div>
    );
  }
}

export default HomeView;
