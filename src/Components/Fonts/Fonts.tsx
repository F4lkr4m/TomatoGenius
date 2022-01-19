import React from 'react';
import './Fonts.css';


interface FontsProps {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
    text?: string,
}

const Fonts = (props: FontsProps) => {
    return (
        <props.type>{props.text}</props.type>
    )
}

export default Fonts;