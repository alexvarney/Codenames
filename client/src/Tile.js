import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { GameContext } from "./App";

const Container = styled.div`
  color: #333333;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 7px;
  margin: 5px;
  cursor: pointer;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  & > span {
    padding: 5px;
  }

  ${props =>
    props.flipped &&
    css`
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
      color: rgba(240, 240, 240, 0.57);
    `}

  background: repeating-linear-gradient(
    45deg,
    #dfe5e7,
    #dfe5e7 10px,
    #eaede3 10px,
    #eaede3 20px
  );

  ${props =>
    props.type === 0 && props.flipped
      ? css`
          /* Neutral */
          background: repeating-linear-gradient(
            -45deg,
            #f1f1d9,
            #f1f1d9 10px,
            #f9f9f0 10px,
            #f9f9f0 20px
          );
          color: rgba(102, 102, 102, 0.57);
        `
      : props.type === 1 && props.flipped
      ? css`
          /* Sudden Death */
          background: repeating-linear-gradient(
            -45deg,
            #7d7d7d,
            #7d7d7d 10px,
            #9c9c9c 10px,
            #9c9c9c 20px
          );
        `
      : props.type === 2 && props.flipped
      ? css`
          /* Red team */
          background: repeating-linear-gradient(
            -45deg,
            #c44236,
            #c44236 10px,
            #d56a60 10px,
            #d56a60 20px
          );
        `
      : props.type === 3 && props.flipped
      ? css`
          /* Blue Team */
          background: repeating-linear-gradient(
            -45deg,
            #3695c4,
            #3695c4 10px,
            #62afd5 10px,
            #62afd5 20px
          );
        `
      : null}
`;

export default function Tile({ data }) {
  const { flipTile } = useContext(GameContext);
  //const flipTile = () => null;

  return (
    <Container
      onClick={() => flipTile(data.id)}
      flipped={data.flipped}
      type={data.type}
    >
      <span>{data.name}</span>
    </Container>
  );
}
