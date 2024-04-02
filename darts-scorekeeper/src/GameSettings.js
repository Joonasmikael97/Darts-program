import React from 'react';
import { useGameState } from './GameStateContext';

function GameSettings() {
  const { gameMode, bestOf, setGameMode, setBestOf } = useGameState();
  return (
    <div>
      <label>Select Game Mode:</label>
      <select value={gameMode} onChange={(e) => setGameMode(e.target.value)}>
        <option value="301">301</option>
        <option value="501">501</option>
      </select>
      <label>Select Best of:</label>
      <select value={bestOf} onChange={(e) => setBestOf(parseInt(e.target.value))}>
        <option value={3}>3</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
}

export default GameSettings;