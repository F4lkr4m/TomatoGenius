import React from 'react';
import Button from '../Button/Button';
import Fonts from '../Fonts/Fonts';
import './PomodoroTimer.css';
import Input from '../Input/Input';
import stopSvg from '../../Assets/stop-button.svg';
import playSvg from '../../Assets/play-button.svg';

class PomodoroTimer extends React.Component<unknown> {
  render() {
    return (
      <>
        <div className="pomodoro-timer">
          <div className="pomodoro-timer__time-box">
            <div id="min" className="pomodoro-timer__time">
              60
            </div>
            <div className="pomodoro-timer__time">:</div>
            <div id="sec" className="pomodoro-timer__time">
              00
            </div>
          </div>
          <menu className="pomodoro-timer__menu">
            <Fonts type="h4" text="Помидор №1" />
            <Input type="text" placeholder="Цель помидора" />
            <div className="pomodoro-timer__control">
              <Button wide={true} centered={true} icon={playSvg} type={'filled'} />
              <Button wide={true} centered={true} icon={stopSvg} type={'filled'} />
            </div>
          </menu>
        </div>
      </>
    );
  }
}

export default PomodoroTimer;
