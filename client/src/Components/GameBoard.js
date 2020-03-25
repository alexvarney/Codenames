import React, { useContext } from "react";
import Tile from "./Tile";
import styled from "styled-components";
import { GameContext } from "./App";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  user-select: none;
  background: rgba(0, 0, 0, 0.35);
`;

const Gameboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  max-width: 750px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    margin: 10px 0 10px 0;
    padding: 0;
    grid-gap: 0px;
  }
`;

export default function GameBoard() {
  const { gameState } = useContext(GameContext);

  return (
    <Container>
      <Gameboard>
        {Array.from(gameState.gameState).map(item => (
          <Tile key={item.id} data={item} />
        ))}
      </Gameboard>
    </Container>
  );
}
