import React from 'react';
import { useGameState } from './GameStateContext';

function Scoreboard() {
  const { player1Score, player2Score, gameWinners, overallWinner } = useGameState();
  return (
    <div>
      <h2>Scoreboard</h2>
      <h3>Player 1 Score: {player1Score}</h3>
      <h3>Player 2 Score: {player2Score}</h3>
      <h2>Game Winners:</h2>
      <ul>
        {gameWinners.map((winner, index) => (
          <li key={index}>{winner}</li>
        ))}
      </ul>
      {overallWinner && <h2>Overall Winner: {overallWinner}</h2>}
    </div>
  );
}

export default Scoreboard;