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
          <Link to="/">
            <img className="header__logo" src={this.props.logo} />
          </Link>
          <Link to="/">
            <span className="header__logo-text">{this.props.logoText}</span>
          </Link>
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
              <Link to="/sign">
                <Button label="Вход/Регистрация" />
              </Link>
            </>
          )}
        </nav>
      </header>
    );
  }
}

export default Header;
