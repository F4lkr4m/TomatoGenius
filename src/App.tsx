import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fonts from './Components/Fonts/Fonts';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      <Fonts type='h1' text='Привет'/>
      <Fonts type='h2' text='Привет'/>
      <Fonts type='h3' text='Привет'/>
      <Fonts type='h4' text='Привет'/>
      <Fonts type='h5' text='Привет'/>
      <Fonts type='h6' text='Привет'/>
      <Fonts type='p' text='Привет'/>
      <Button label='Hello'/>
    </div>
  );
}

export default App;
