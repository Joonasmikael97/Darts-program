import React, { useEffect } from 'react';
import { useGameState } from './GameStateContext';
import Scoreboard from './Scoreboard';
import GameSettings from './GameSettings';

function Game() {
  const {
    player1Score,
    setPlayer1Score,
    player2Score,
    setPlayer2Score,
    currentPlayer,
    setCurrentPlayer,
    inputScore,
    setInputScore,
    gameMode,
    setGameMode,
    bestOf,
    setBestOf, 
    player1GamesWon,
    setPlayer1GamesWon,
    player2GamesWon,
    setPlayer2GamesWon,
    gameNumber,
    setGameNumber,
    gameWinners,
    setGameWinners,
    overallWinner,
    setOverallWinner,
  } = useGameState();

  useEffect(() => {
    if (player1GamesWon >= Math.ceil(bestOf / 2)) {
      setOverallWinner('Player 1');
    } else if (player2GamesWon >= Math.ceil(bestOf / 2)) {
      setOverallWinner('Player 2');
    } else {
      setOverallWinner('');
    }
  }, [player1GamesWon, player2GamesWon, bestOf, setOverallWinner]);

  const handleScoreInput = () => {
    if (overallWinner) {
      // If there's an overall winner, prevent further input
      alert('Game over! Please reset the game to play again.');
      return;
    }
  
    const points = parseInt(inputScore);
    if (isNaN(points)) {
      alert('Please enter a valid number.');
      setInputScore('');
      return;
    }
  
    if (points > 180) {
      alert('Maximum allowed score is 180.');
      setInputScore('');
      return;
    }
  
    if (currentPlayer === 'Player 1') {
      const newScore = player1Score - points;
      if (newScore === 0) {
        handleGameEnd('Player 1');
      } else if (newScore > 0) {
        setPlayer1Score(newScore);
      }
    } else {
      const newScore = player2Score - points;
      if (newScore === 0) {
        handleGameEnd('Player 2');
      } else if (newScore > 0) {
        setPlayer2Score(newScore);
      }
    }
    setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1');
    setInputScore('');
  };

  const handleGameEnd = (winner) => {
    if (winner === 'Player 1') {
      setPlayer1GamesWon(player1GamesWon + 1);
      setGameWinners([...gameWinners, 'Player 1']);
    } else {
      setPlayer2GamesWon(player2GamesWon + 1);
      setGameWinners([...gameWinners, 'Player 2']);
    }

    setPlayer1Score(gameMode === '301' ? 301 : 501);
    setPlayer2Score(gameMode === '301' ? 301 : 501);
    setCurrentPlayer('Player 1');
    setInputScore('');
    setGameNumber(gameNumber + 1);
  };

  const handleReset = () => {
    setPlayer1Score(gameMode === '301' ? 301 : 501);
    setPlayer2Score(gameMode === '301' ? 301 : 501);
    setCurrentPlayer('Player 1');
    setGameNumber(1);
    setPlayer1GamesWon(0);
    setPlayer2GamesWon(0);
    setGameWinners([]);
    setOverallWinner('');
    setInputScore('');
  };

  return (
    <div>
      <div>Current Player: {currentPlayer}</div>
      <Scoreboard
        player1Score={player1Score}
        player2Score={player2Score}
        gameWinners={gameWinners}
        overallWinner={overallWinner}
      />
      <GameSettings
        gameMode={gameMode}
        bestOf={bestOf}
        setGameMode={setGameMode}
        setBestOf={setBestOf}
      />
      <div>
        <input
          type="number"
          value={inputScore}
          onChange={(e) => setInputScore(e.target.value)}
          max={180}
        />
        <button onClick={handleScoreInput}>Enter Score</button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Game;
