import React from 'react';
import Fonts from '../Fonts/Fonts';
import './Snackbar.css';

interface SnackbarState {
  opened: boolean;
  timerToClose: NodeJS.Timeout | undefined;
}

class Snackbar extends React.Component<unknown, SnackbarState> {
  message: string;
  constructor(props: unknown) {
    super(props);
    this.state = {
      opened: false,
      timerToClose: undefined,
    };
    this.message = '';
  }

  open(message: string) {
    this.message = message;
    if (this.state.timerToClose) {
      clearTimeout(this.state.timerToClose);
    }
    this.setState({
      timerToClose: setTimeout(() => {
        this.setState({
          opened: false,
        });
      }, 3000),
      opened: true,
    });
  }

  render(): React.ReactNode {
    return (
      <div className={`snackbar ${this.state.opened ? 'snackbar--opened' : 'snackbar--closed'}`}>
        <Fonts text={this.message} secondary={true} type="p" />
      </div>
    );
  }
}

export default Snackbar;
