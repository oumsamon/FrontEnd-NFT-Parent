import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';
import Diaper from './Components/Diaper';
import Bottle from './Components/Bottle';
import BottleNipple from './Components/BottleNipple';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Landing />
      </header>
      <body>
    
    <Diaper />
    <Bottle />
    <BottleNipple />

      </body>
    </div>
  );
}

export default App;
