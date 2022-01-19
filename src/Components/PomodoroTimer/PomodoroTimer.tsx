import React from 'react';
import Button from '../Button/Button';
import Fonts from '../Fonts/Fonts';
import './PomodoroTimer.css';
import Input from '../Input/Input';
import stopSvg from '../../Assets/stop-button.svg';
import playSvg from '../../Assets/play-button.svg';

interface PomodoroState {
  mins: number;
  secs: number;
  timer: NodeJS.Timer | undefined;
}

class PomodoroTimer extends React.Component<unknown, PomodoroState> {
  mins = 60;
  secs = 0;

  constructor() {
    super(null);
    this.state = {
      mins: 60,
      secs: 0,
      timer: undefined,
    };
  }

  play = () => {
    console.log(this);
    const timer = setInterval(() => {
      this.countIteration();
    }, 1000);
    this.setState({ timer: timer });
  };

  private checkEndOfTimer() {
    if (this.state.mins === 0 && this.state.secs === 0) {
      return true;
    } else {
      return false;
    }
  }

  countIteration = () => {
    console.log(this.state.timer);
    if (!this.state?.timer) {
      return;
    }
    if (this.checkEndOfTimer() && this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
      });
    }

    if (this.state.secs === 1 && this.state.mins === 0) {
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
      });
    }

    let newMins = this.state.mins;
    let newSecs = this.state.secs;
    if (this.state.secs < 2) {
      newMins = this.state.mins - 1;
      newSecs = 59;
    } else {
      newSecs = this.state.secs - 1;
    }

    this.setState({
      mins: newMins,
      secs: newSecs,
    });

    const minHtml = document.getElementById('min');
    const secsHtml = document.getElementById('sec');

    if (minHtml && secsHtml) {
      minHtml.innerHTML = String(newMins);
      secsHtml.innerHTML = String(newSecs);
    }
  };

  stop = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
      });
    }
  };

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
              <Button onClick={this.play} wide={true} centered={true} icon={playSvg} type={'filled'} />
              <Button onClick={this.stop} wide={true} centered={true} icon={stopSvg} type={'filled'} />
            </div>
          </menu>
        </div>
      </>
    );
  }
}

export default PomodoroTimer;
