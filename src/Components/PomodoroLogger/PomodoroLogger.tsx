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
  target: string | undefined;
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

  private foundSimilarLog = (task: 'pomodoro' | 'break', id: number) => {
    return this.state.logs.find((log) => {
      console.log(log.task, task, log.id, id);
      if (log.task === task && log.id === id) {
        return true;
      }
      return false;
    });
  };

  addLog = (logInfo: PomodoroLog): boolean => {
    // Find similar
    const foundedSimilar = this.foundSimilarLog(logInfo.task, logInfo.id);

    if (!foundedSimilar) {
      const newLogs = this.state.logs;
      newLogs.push(logInfo);
      this.setState({
        logs: newLogs,
      });
      return true;
    }
    return false;
  };

  updateLog = (id: number, task: 'pomodoro' | 'break', newStatus: 'done' | 'process') => {
    const foundedSimilar = this.foundSimilarLog(task, id);
    if (foundedSimilar) {
      const newLogs = this.state.logs.map((log) => {
        if (log.id === foundedSimilar.id && log.task === foundedSimilar.task) {
          log.status = newStatus;
          return log;
        }
        return log;
      });
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
          const target = item.target ? item.target : 'У самурая нет цели';
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
      </div>
    );
  }
}

export default PomodoroLogger;
