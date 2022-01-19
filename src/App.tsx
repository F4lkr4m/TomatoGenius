import React from 'react';
import './App.css';
import logo from './logo.svg';
import headerLogo from './Components/Header/logo.svg';
import Button from './Components/Button/Button';
import Fonts from './Components/Fonts/Fonts';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header userAuth={false} logo={headerLogo} logoText={'Tomato Genius'} />
      <div className="app">
        <Button label="Привет" hover={true} icon={logo} wide={false} />
        <Fonts type="h1" secondary={true} text="Привет" />
        <Fonts type="h2" text="Привет" />
        <Fonts type="h3" text="Привет" />
        <Fonts type="h4" text="Привет" />
        <Fonts type="h5" text="Привет" />
        <Fonts type="h6" text="Привет" />
        <Fonts type="p" text="Привет" />
        <Routes>
          <Route path="/signin" element={<Button label="какая то надпись" />} />
          <Route path="/signup" element={<Button label="какая то надпись213" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
