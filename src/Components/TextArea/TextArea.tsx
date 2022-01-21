import React, { ChangeEvent } from 'react';
import './TextArea.css';

interface TextAreaProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      value={props.value}
      className="textarea"
      onChange={props.onChange}
      placeholder={props.placeholder}
    ></textarea>
  );
};

export default TextArea;
