import React from 'react';
import './TextArea.css';

class TextArea extends React.Component<unknown> {
  textarea: React.RefObject<HTMLTextAreaElement>;

  constructor(props: unknown) {
    super(props);
    this.textarea = React.createRef();
  }

  render(): React.ReactNode {
    return <textarea ref={this.textarea} className="textarea" placeholder=""></textarea>;
  }

  get value() {
    return this.textarea.current?.value;
  }
}

export default TextArea;
