import React from 'react';
import { genId } from '../../Utils/IdGenerator';
import './Accordion.css';
import arrowSvg from './arrow.svg';

interface AccordionProps {
  label?: string;
  items?: Array<JSX.Element>;
}

interface AccordionState {
  accordionOpened: boolean;
}

class Accordion extends React.Component<AccordionProps, AccordionState> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      accordionOpened: false,
    };
  }

  private toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const arrow = currentTarget.querySelector('.accordion-button__arrow');
    if (arrow) {
      arrow.classList.toggle('arrow-rotate');
    }

    this.setState({
      accordionOpened: !this.state.accordionOpened,
    });
  };

  render() {
    return (
      <div className="accordion">
        <button onClick={this.toggle} className={'button accordion-button'}>
          {this.props.label}
          <img src={arrowSvg} className="accordion-button__arrow" alt="arrow img" />
        </button>
        <ul className={`accordion__list ${this.state.accordionOpened ? 'accordion__list--opened' : ''}`}>
          {this.props.items?.map((item) => {
            return (
              <li key={String(genId.next().value)} className="accordion__list-item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Accordion;
