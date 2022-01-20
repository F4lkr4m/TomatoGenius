import React, { ReactNode } from 'react';
import './Accordion.css';
import arrowSvg from './arrow.svg';
import Fonts from '../Fonts/Fonts';

interface AccordionProps {
  label?: string;
  items?: Array<ReactNode>;
}

class Accordion extends React.Component<AccordionProps, AccordionProps> {
  accordion: React.RefObject<HTMLDivElement>;

  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      items: this.props.items,
      label: this.props.label,
    };
    this.accordion = React.createRef();
  }

  addItem(item: ReactNode | HTMLElement) {
    const newItems = this.state.items;
    newItems?.push(item);
    this.setState({
      items: newItems,
    });
  }

  private toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const arrow = currentTarget.querySelector('.accordion-button__arrow');
    if (arrow) {
      arrow.classList.toggle('arrow-rotate');
    }

    const list = this.accordion.current?.querySelector('.accordion__list');
    list?.classList.toggle('accordion__list--opened');
  };

  render() {
    return (
      <div ref={this.accordion} className="accordion">
        <button onClick={this.toggle} className={'button accordion-button'}>
          {this.props.label}
          <img src={arrowSvg} className="accordion-button__arrow" alt="arrow img" />
        </button>
        <ul className="accordion__list">
          {this.state.items?.map((item) => {
            return (
              <li key="2" className="accordion__list-item">
                {item}
              </li>
            );
          })}
          <li className="accordion__list-item">
            <Fonts type="h5" text="Название задачи" />
            <Fonts type="p" secondary={true} text={'Описание задачи'} />
          </li>
          <li className="accordion__list-item">
            <Fonts type="h5" lineThrough={true} text="Название задачи" />
            <Fonts type="p" lineThrough={true} secondary={true} text={'Описание задачи'} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Accordion;
