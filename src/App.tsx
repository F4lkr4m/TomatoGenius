import React from 'react';
import './App.css';
import logo from './logo.svg';
import headerLogo from './Components/Header/logo.svg';
import Button from './Components/Button/Button';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Input from './Components/Input/Input';
import SignInForm from './Components/SignForm/SignIn/SignIn';
import SignUpForm from './Components/SignForm/SingUp/SignUp';

function App() {
  return (
    <>
      <Header userAuth={false} logo={headerLogo} logoText={'Tomato Genius'} />
      <div className="app">
        <Input type="email" placeholder="smth" />
        <Button label="Привет" type={'hover'} icon={logo} wide={false} />
        <SignInForm />
        <SignUpForm />
        <Routes>
          <Route path="/signin" element={<Button label="какая то надпись" />} />
          <Route path="/signup" element={<Button label="какая то надпись213" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
