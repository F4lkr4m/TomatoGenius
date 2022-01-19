import React from 'react';
import './Header.css';
import Button from '../Button/Button';

interface HeaderProps {
  logo?: string;
  logoText?: string;
}

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    return (
      <header className={'header'}>
        <div className="header__logo-box">
          <img className="header__logo" src={this.props.logo} />
          <span className="header__logo-text">{this.props.logoText}</span>
        </div>
        <nav className="header__nav">
          <Button label="О нас" />
          <Button label="Профиль" />
          <Button label="Настройки" />
        </nav>
      </header>
    );
  }
}

export default Header;
