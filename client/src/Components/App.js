import React, { useEffect, useState } from "react";
import GameBoard from "../Components/GameBoard";
import GameOptions from "../Components/GameOptions";
import Lobby from "../Components/Lobby";

import useSocket from "./useSocket";

export const GameContext = React.createContext();

function App() {
  const socketContext = useSocket("http://localhost:4001");
  const { gameState } = socketContext;

  return (
    <GameContext.Provider value={socketContext}>
      <div className="App">
        <GameOptions />
        {gameState && (
          <>
            <GameBoard />
            <Lobby />
          </>
        )}
      </div>
    </GameContext.Provider>
  );
}

export default App;
