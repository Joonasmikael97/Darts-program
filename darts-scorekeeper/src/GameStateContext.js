// GameStateContext.js
import React, { createContext, useContext, useState } from 'react';

const GameStateContext = createContext();

export const useGameState = () => useContext(GameStateContext);

export const GameStateProvider = ({ children }) => {
  const [player1Score, setPlayer1Score] = useState(301);
  const [player2Score, setPlayer2Score] = useState(301);
  const [currentPlayer, setCurrentPlayer] = useState('Player 1');
  const [inputScore, setInputScore] = useState('');
  const [gameMode, setGameMode] = useState('301');
  const [bestOf, setBestOf] = useState(3);
  const [player1GamesWon, setPlayer1GamesWon] = useState(0);
  const [player2GamesWon, setPlayer2GamesWon] = useState(0);
  const [gameNumber, setGameNumber] = useState(1);
  const [gameWinners, setGameWinners] = useState([]);
  const [overallWinner, setOverallWinner] = useState('');

  const gameState = {
    player1Score,
    setPlayer1Score,
    player2Score,
    setPlayer2Score,
    currentPlayer,
    setCurrentPlayer,
    inputScore,
    setInputScore,
    gameMode,
    setGameMode, // Make sure setGameMode is exported
    bestOf,
    setBestOf, // Make sure setBestOf is exported
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
  };

  return (
    <GameStateContext.Provider value={gameState}>
      {children}
    </GameStateContext.Provider>
  );
};
