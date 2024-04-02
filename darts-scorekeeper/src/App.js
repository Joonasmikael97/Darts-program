// App.js
import React from 'react';
import './App.css';
import Game from './Game';
import { GameStateProvider } from './GameStateContext';
import image from './Darts-background.jpg'

function App() {
  const Mystyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    fontSize: '20px'
  };
  return (
    <GameStateProvider>
      <div className="App" style={Mystyle}>
        <h1>Darts Score Tracker</h1>
        <Game />
      </div>
    </GameStateProvider>
  );
}

export default App;

