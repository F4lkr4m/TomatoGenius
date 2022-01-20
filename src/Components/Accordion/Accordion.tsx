import React from 'react';
import { genId } from '../../Utils/IdGenerator';
import './Accordion.css';
import arrowSvg from './arrow.svg';

interface AccordionProps {
  label?: string;
  items?: Array<JSX.Element>;
}

class Accordion extends React.Component<AccordionProps, AccordionProps> {
  accordion: React.RefObject<HTMLDivElement>;

  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      items: this.props.items ? this.props.items : [],
      label: this.props.label,
    };
    this.accordion = React.createRef();
  }

  addItem(item: JSX.Element) {
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

  deleteItem(id: string): boolean {
    const foundItem = this.state.items?.find((itemId) => {
      if (itemId?.key) {
        return itemId.key === id;
      }
      return false;
    });
    if (foundItem) {
      const newItems = this.state.items?.filter((item) => {
        return item !== foundItem;
      });
      this.setState({
        items: newItems,
      });
      return true;
    } else {
      return false;
    }
  }

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
