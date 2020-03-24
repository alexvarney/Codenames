import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import GameBoard from "./GameBoard";
import GameOptions from "./GameOptions";
import useSocket from "./useSocket";

export const GameContext = React.createContext();

function App() {
  const socketContext = useSocket("http://localhost:4001");
  const { gameState } = socketContext;

  return (
    <GameContext.Provider value={socketContext}>
      <div className="App">
        <GameOptions />
        {gameState && <GameBoard gameState={gameState.gameState} />}
      </div>
    </GameContext.Provider>
  );
}

export default App;
