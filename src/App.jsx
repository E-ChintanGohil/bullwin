import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import News from './components/News';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <News />
    </div>
  );
}

export default App; 