import React from "react";
import Tile from "./Tile";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  user-select: none;
`;

const Gameboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  max-width: 750px;
  background: #f4f5f5;
  padding: 10px;
  border-radius: 5px;
`;

export default function GameBoard({ gameState }) {
  return (
    <Container>
      <Gameboard>
        {Array.from(gameState).map(item => (
          <Tile key={item.id} data={item} />
        ))}
      </Gameboard>
    </Container>
  );
}
