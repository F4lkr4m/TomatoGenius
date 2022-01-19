import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

interface HeaderProps {
  userAuth: boolean;
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
          {this.props.userAuth ? (
            <>
              <Button label="Профиль" />
              <Button label="Настройки" />
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button label="Вход" />
              </Link>
              <Link to="/signup">
                <Button label="Регистрация" />
              </Link>
            </>
          )}
        </nav>
      </header>
    );
  }
}

export default Header;