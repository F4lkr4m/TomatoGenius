import React from 'react';
import { genId } from '../../Utils/IdGenerator';
import Fonts from '../Fonts/Fonts';
import './PomodoroLogger.css';

interface PomodoroLog {
  task: 'pomodoro' | 'break';
  id: number;
  mins: number;
  secs: number;
  status: 'process' | 'done';
  target: string;
}

interface PomodoroLoggerI {
  logs: Array<PomodoroLog>;
}

class PomodoroLogger extends React.Component<unknown, PomodoroLoggerI> {
  constructor(props: PomodoroLoggerI) {
    super(props);
    this.state = {
      logs: [],
    };
  }

  addLog = (logInfo: PomodoroLog) => {
    // Find similar
    const foundedSimilar = this.state.logs.find((log) => {
      if (log.target === logInfo.task && log.id === logInfo.id) {
        return true;
      }
      return false;
    });

    if (!foundedSimilar) {
      const newLogs = this.state.logs;
      newLogs.push(logInfo);
      this.setState({
        logs: newLogs,
      });
    }
  };

  render(): React.ReactNode {
    return (
      <div className="pomodoro-logger">
        {this.state.logs?.map((item) => {
          const label = `${item.task === 'pomodoro' ? 'Помидор №' : 'Перерыв №'}${item.id}`;
          const time = `${item.mins}:${item.secs}`;
          const status = `Статус: ${item.status === 'done' ? 'выполнен' : 'в процессе'}`;
          const target = item.target;
          const key = String(genId.next().value);
          return (
            <div key={key} className="pomodoro-logger__log">
              <Fonts type="h4" text={label} />
              <Fonts type="p" text={time} />
              <Fonts type="p" text={status} />
              <Fonts type="p" text={target} />
            </div>
          );
        })}
        <div className="pomodoro-logger__log">
          <Fonts type="h4" text="Помидор №1" />
          <Fonts type="p" text="60:00" />
          <Fonts type="p" text="Статус: выполнен" />
          <Fonts type="p" text="Цель: Какая-то" />
        </div>
        <div className="pomodoro-logger__log">
          <Fonts type="h4" text="Помидор №1" />
          <Fonts type="p" text="60:00" />
          <Fonts type="p" text="Статус: выполнен" />
          <Fonts type="p" text="Цель: Какая-то" />
        </div>
      </div>
    );
  }
}

export default PomodoroLogger;
