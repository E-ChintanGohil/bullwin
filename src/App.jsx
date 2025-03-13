import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navigation';
import News from './components/News/News';
import Grid from './components/Grid/Grid';
import CasinoGrid from './components/CasinoGrid/CasinoGrid';
import { cardData } from './data/cardData';
import { casinoData } from './data/casinoData';
import { cardData2 } from './data/cardData2';
import { casinoData2 } from './data/casinoData2';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <News />
      <Grid cards={cardData} />
      <CasinoGrid cards={casinoData} />
      <Grid cards={cardData2} />
      <CasinoGrid cards={casinoData2} />
    </div>
  );
};

export default App; 