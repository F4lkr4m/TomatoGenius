import React from 'react';
import './Accordion.css';
import arrowSvg from './arrow.svg';
import Fonts from '../Fonts/Fonts';

interface AccordionProps {
  label?: string;
}

class Accordion extends React.Component<AccordionProps> {
  toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const arrow = currentTarget.querySelector('.accordion-button__arrow');
    if (arrow) {
      arrow.classList.toggle('arrow-rotate');
    }
  };

  render() {
    return (
      <div className="accordion">
        <button onClick={this.toggle} className={'button accordion-button'}>
          {this.props.label}
          <img src={arrowSvg} className="accordion-button__arrow" alt="arrow img" />
        </button>
        <ul className="accordion__list">
          <li className="accordion__list-item">
            <Fonts type="h5" text="Название задачи" />
            <Fonts type="p" secondary={true} text={'Описание задачи'} />
          </li>
          <li className="accordion__list-item">
            <Fonts type="h5" text="Название задачи" />
            <Fonts type="p" secondary={true} text={'Описание задачи'} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Accordion;
