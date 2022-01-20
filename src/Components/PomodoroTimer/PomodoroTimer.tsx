import React from 'react';
import Button from '../Button/Button';
import Fonts from '../Fonts/Fonts';
import './PomodoroTimer.css';
import Input from '../Input/Input';
import stopSvg from '../../Assets/stop-button.svg';
import playSvg from '../../Assets/play-button.svg';
import pauseSvg from '../../Assets/pause-button.svg';
import doneSvg from '../../Assets/done-button.svg';
import PomodoroLogger from '../PomodoroLogger/PomodoroLogger';

interface ButtonI {
  onClick: () => void;
  icon: string;
}

interface PomodoroState {
  mins: number;
  secs: number;
  timer: NodeJS.Timer | undefined;
  active: boolean;
  leftButton: ButtonI;
  rightButton: ButtonI;
  pomodoroNumber: number;
  breakNumber: number;
  pomodoroNumberCycle: number;
  pomodoroQueue: Array<PomodoroTask>;
  currentTask: PomodoroTask;
}

interface PomodoroTask {
  task: 'pomodoro' | 'break';
  mins: number;
  secs: number;
}

class PomodoroTimer extends React.Component<unknown, PomodoroState> {
  // Buttons aliases
  playButton: ButtonI;
  stopButton: ButtonI;
  pauseButton: ButtonI;
  doneButton: ButtonI;

  logger: React.RefObject<PomodoroLogger>;
  targetInput: React.RefObject<Input>;

  constructor() {
    super(null);

    // Implementation of aliases
    this.playButton = {
      onClick: this.play,
      icon: playSvg,
    };
    this.stopButton = {
      onClick: this.stop,
      icon: stopSvg,
    };
    this.doneButton = {
      onClick: this.done,
      icon: doneSvg,
    };
    this.pauseButton = {
      onClick: this.pause,
      icon: pauseSvg,
    };

    // Fix constants
    const pomodoroQueue: Array<PomodoroTask> = [];
    for (let i = 0; i < 4; i++) {
      pomodoroQueue.push({
        task: 'pomodoro',
        mins: 60,
        secs: 0,
      });
    }
    pomodoroQueue.push({
      task: 'break',
      mins: 15,
      secs: 0,
    });

    this.state = {
      mins: 60,
      secs: 0,
      active: false,
      timer: undefined,
      leftButton: this.playButton,
      rightButton: this.stopButton,
      pomodoroNumber: 0,
      pomodoroNumberCycle: 4,
      breakNumber: 0,
      pomodoroQueue: pomodoroQueue,
      currentTask: pomodoroQueue[0],
    };

    this.logger = React.createRef();
    this.targetInput = React.createRef();
  }

  private play = () => {
    if (!this.state.active) {
      this.addCurrentTask();
      const timer = setInterval(() => {
        this.countIteration();
      }, 1000);
      this.setState({
        timer: timer,
        active: true,
        leftButton: this.pauseButton,
        rightButton: this.stopButton,
      });
    }
  };

  private pause = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
        active: false,
        leftButton: this.playButton,
        rightButton: this.doneButton,
      });
    }
  };

  private stop = () => {
    if (this.state.timer && this.state.active) {
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
        mins: 60,
        secs: 0,
        active: false,
        leftButton: this.playButton,
      });
    }
  };

  private addCurrentTask = () => {
    const currentTask = this.state.currentTask.task;
    const added = this.logger.current?.addLog({
      task: this.state.currentTask.task,
      mins: this.state.currentTask.mins,
      secs: this.state.currentTask.secs,
      id: currentTask === 'pomodoro' ? this.state.pomodoroNumber : this.state.breakNumber,
      status: 'process',
      target: this.targetInput.current?.value,
    });
    if (added) {
      this.targetInput.current?.toggleDisable();
    }
  };

  private done = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    let newPomodoroNumber = this.state.pomodoroNumber;
    let newBreakNumber = this.state.breakNumber;
    if (this.state.currentTask.task === 'pomodoro') {
      this.logger.current?.updateLog(this.state.pomodoroNumber, 'pomodoro', 'done');
      newPomodoroNumber += 1;
    } else {
      this.logger.current?.updateLog(this.state.breakNumber, 'break', 'done');
      newBreakNumber += 1;
    }
    const nextStateIndex = (newPomodoroNumber + newBreakNumber) % this.state.pomodoroQueue.length;
    const nextState = this.state.pomodoroQueue[nextStateIndex];
    this.setState({
      mins: nextState.mins,
      secs: nextState.secs,
      pomodoroNumber: newPomodoroNumber,
      currentTask: nextState,
      rightButton: this.stopButton,
      leftButton: this.playButton,
      timer: undefined,
      active: false,
    });
    if (this.targetInput.current) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.targetInput.current!.value = '';
      this.targetInput.current?.toggleDisable();
    }
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
      this.done();
    }

    if (this.state.secs === 1 && this.state.mins === 0) {
      this.done();
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
  };

  render() {
    let taskLabel = '';
    if (this.state.currentTask.task === 'pomodoro') {
      taskLabel = 'Помидор №' + this.state.pomodoroNumber;
    } else {
      taskLabel = 'Перерыв №' + this.state.breakNumber;
    }
    return (
      <>
        <div className="pomodoro-timer">
          <div className="pomodoro-timer__time-box">
            <div id="min" className="pomodoro-timer__time">
              {this.state.mins}
            </div>
            <div className="pomodoro-timer__time">:</div>
            <div id="sec" className="pomodoro-timer__time">
              {this.state.secs}
            </div>
          </div>
          <menu className="pomodoro-timer__menu">
            <Fonts type="h4" text={taskLabel} />
            <Input ref={this.targetInput} type="text" placeholder="Цель помидора" />
            <div className="pomodoro-timer__control">
              <Button
                onClick={this.state.leftButton.onClick}
                wide={true}
                centered={true}
                icon={this.state.leftButton.icon}
                type={'filled'}
              />
              <Button
                onClick={this.state.rightButton.onClick}
                wide={true}
                centered={true}
                icon={this.state.rightButton.icon}
                type={'filled'}
              />
            </div>
          </menu>
        </div>
        <PomodoroLogger ref={this.logger} />
      </>
    );
  }
}

export default PomodoroTimer;
