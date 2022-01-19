import React from 'react';
import './App.css';
import logo from './logo.svg';
import Button from './Components/Button/Button';
import Fonts from './Components/Fonts/Fonts';

function App() {
  return (
    <>
      <Fonts type="h1" secondary={true} text="Привет" />
      <Fonts type="h2" text="Привет" />
      <Fonts type="h3" text="Привет" />
      <Fonts type="h4" text="Привет" />
      <Fonts type="h5" text="Привет" />
      <Fonts type="h6" text="Привет" />
      <Fonts type="p" text="Привет" />
      <Button label="Привет" hover={true} icon={logo} wide={false} />
    </>
  );
}

export default App;
