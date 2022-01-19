import React from 'react';
import PomodoroTimer from '../../Components/PomodoroTimer/PomodoroTimer';
import './HomeView.css';

class HomeView extends React.Component<unknown> {
  render() {
    return (
      <div className={'home-view__layout'}>
        <PomodoroTimer />
      </div>
    );
  }
}

export default HomeView;
