import React from "react";
import styled from "styled-components";

import GameBoard from "../Components/GameBoard";
import GameOptions from "../Components/GameOptions";
import Lobby from "../Components/Lobby";

import useSocket from "./useSocket";

const ENDPOINT =
  process.env.NODE_ENV === "development" ? "localhost:4001/" : "/";

export const GameContext = React.createContext();

const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  const socketContext = useSocket(ENDPOINT);
  const { gameState } = socketContext;

  return (
    <GameContext.Provider value={socketContext}>
      <Wrapper>
        <GameOptions />
        {gameState && (
          <>
            <GameBoard />
            <Lobby />
          </>
        )}
      </Wrapper>
    </GameContext.Provider>
  );
}

export default App;
