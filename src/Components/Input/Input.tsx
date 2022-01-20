import React from 'react';
import './Input.css';

interface InputProps {
  type: 'text' | 'tel' | 'email' | 'number' | 'password';
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<InputProps> {
  private readonly input: React.RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.input = React.createRef();
  }

  toggleDisable = () => {
    this.input.current?.toggleAttribute('disabled');
  };

  get value() {
    if (this.input.current) {
      return this.input.current?.value;
    }
    return '';
  }

  set value(value: string) {
    if (this.input.current) {
      this.input.current.value = value;
    }
  }

  render(): React.ReactNode {
    return (
      <label>
        <input
          ref={this.input}
          onChange={this.props.onChange}
          className="input"
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </label>
    );
  }
}

export default Input;
