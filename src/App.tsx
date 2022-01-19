import React from 'react';
import './App.css';
import headerLogo from './Components/Header/logo.svg';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import SignView from './Views/SignView/SignView';

function App() {
  return (
    <>
      <Header userAuth={false} logo={headerLogo} logoText={'Tomato Genius'} />
      <div className="app">
        <Routes>
          <Route path="/sign" element={<SignView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
