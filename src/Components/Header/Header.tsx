import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { constants } from '../../Utils/Constants';
import moonSvg from '../../Assets/moon.svg';
import sunSvg from '../../Assets/sun.svg';

interface HeaderProps {
  userAuth: boolean;
  logo?: string;
  logoText?: string;
}

interface HeaderI {
  themeIcon: string;
}

class Header extends React.Component<HeaderProps, HeaderI> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      themeIcon: sunSvg,
    };
  }

  private toggleTheme = () => {
    if (this.state.themeIcon === sunSvg) {
      this.setState({
        themeIcon: moonSvg,
      });
    } else {
      this.setState({
        themeIcon: sunSvg,
      });
    }
    document.querySelector('body')?.classList.toggle('dark');
  };

  render() {
    return (
      <header className={'header'}>
        <div className="header__logo-box">
          <Link to={constants.urls.home}>
            <img className="header__logo" src={this.props.logo} />
          </Link>
          <Link to={constants.urls.home}>
            <span className="header__logo-text">{this.props.logoText}</span>
          </Link>
        </div>
        <nav className="header__nav">
          <Button onClick={this.toggleTheme} icon={this.state.themeIcon} />
          <>
            <Link to={constants.urls.about}>
              <Button label="О нас" />
            </Link>
          </>
          {this.props.userAuth ? (
            <>
              <Button label="Профиль" />
              <Button label="Настройки" />
            </>
          ) : (
            <>
              <Link to={constants.urls.sign}>
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
