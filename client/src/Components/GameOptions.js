import React, { useState, useContext } from "react";
import { GameContext } from "./App";
import SessionOptions from "./SessionOptions";
import {
  Container,
  Row,
  ContentContainer,
  Banner,
  InputButton,
  NewGameButton,
  StyledInput
} from "./GameOptions.styles";

export default function Component(props) {
  const { joinGame, gameState, createGame } = useContext(GameContext);

  const [sessionInputVal, setSessionInputVal] = useState("");

  const newGame = e => {
    e.preventDefault();
    createGame();
  };

  return (
    <Container>
      <div>
        <Banner>
          <span>CODENAMES</span>
        </Banner>
        <ContentContainer>
          <NewGameButton onClick={newGame}>New Game</NewGameButton>
          <Row>
            <StyledInput
              value={sessionInputVal}
              onChange={e => setSessionInputVal(e.target.value)}
              placeholder="Game ID"
            />
            <InputButton onClick={() => joinGame(sessionInputVal)}>
              Join Game
            </InputButton>
          </Row>
          {gameState && <SessionOptions />}
        </ContentContainer>
      </div>
    </Container>
  );
}
