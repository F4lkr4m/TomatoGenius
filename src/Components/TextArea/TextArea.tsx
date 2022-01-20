import React from 'react';
import './TextArea.css';

interface TextAreaProps {
  placeholder?: string;
}

class TextArea extends React.Component<TextAreaProps> {
  textarea: React.RefObject<HTMLTextAreaElement>;

  constructor(props: TextAreaProps) {
    super(props);
    this.textarea = React.createRef();
  }

  render(): React.ReactNode {
    return <textarea ref={this.textarea} className="textarea" placeholder={this.props.placeholder}></textarea>;
  }

  get value() {
    return this.textarea.current?.value;
  }
}

export default TextArea;
