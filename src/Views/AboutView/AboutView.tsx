import React from 'react';
import Fonts from '../../Components/Fonts/Fonts';
import { constants } from '../../Utils/Constants';
import './AboutView.css';

class AboutView extends React.Component<unknown> {
  render(): React.ReactNode {
    return (
      <div className="about-view__layout">
        <Fonts type="h3" text={constants.aboutDescr} />
      </div>
    );
  }
}

export default AboutView;
