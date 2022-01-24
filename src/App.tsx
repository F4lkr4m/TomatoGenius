import React from 'react';
import './App.css';
import headerLogo from './Components/Header/logo.svg';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import SignView from './Views/SignView/SignView';
import HomeView from './Views/HomeView/HomeView';
import AboutView from './Views/AboutView/AboutView';
import { constants } from './Utils/Constants';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header userAuth={false} logo={headerLogo} logoText={'Tomato Genius'} />
      <div className="app">
        <Routes>
          <Route path={constants.urls.home} element={<HomeView />} />
          <Route path={constants.urls.sign} element={<SignView />} />
          <Route path={constants.urls.about} element={<AboutView />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
