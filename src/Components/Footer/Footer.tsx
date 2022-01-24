import React from 'react';
import { constants } from '../../Utils/Constants';
import Button from '../Button/Button';
import Fonts from '../Fonts/Fonts';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a href={constants.githubUrl}>
        <Button type={'hover'} label="github" />
      </a>
      <Fonts type={'p'} text={'Created by falkr4m'} />
    </footer>
  );
};

export default Footer;
