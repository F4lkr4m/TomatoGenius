import React from 'react';
import Fonts from '../Fonts/Fonts';
import './Snackbar.css';

interface SnackbarProps {
  text: string;
}

interface SnackbarState {
  opened: boolean;
  timerToClose: NodeJS.Timeout | undefined;
}

class Snackbar extends React.Component<SnackbarProps, SnackbarState> {
  constructor(props: SnackbarProps) {
    super(props);
    this.state = {
      opened: false,
      timerToClose: undefined,
    };
  }

  open() {
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
        <Fonts text={this.props.text} secondary={true} type="p" />
      </div>
    );
  }
}

export default Snackbar;
