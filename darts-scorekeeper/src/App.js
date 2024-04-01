import React from 'react';
import './App.css';
import Game from './Game';
import image from './Darts-background.jpg'

function App() {
  const Mystyle = {
    backgroundImage: `url(${image})`, // Use backticks (`) for template literals
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    fontSize: '20px'
  };
  return (
    <div className="App" style={Mystyle}>
      <h1>Darts Score Tracker</h1>
      <Game />
    </div>
  );
}

export default App;
