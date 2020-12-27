import React, { useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { GameContext } from "./App";
import Spinner from "./Spinner";
import styled from "styled-components";

const JoinWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  z-index: 100;
  align-items: center;
  justify-items: center;
  pointer-events: none;
`;

export default function JoinURLHandler() {
  const { id } = useParams();
  const { joinGame, socket, gameState } = useContext(GameContext);

  useEffect(() => {
    if (id && socket && !gameState) {
      console.log(`joining ${id}`);

      setTimeout(() => socket.emit("join_game", id), 1500);
    }
  }, [socket]);

  return gameState ? (
    <Redirect to="/" />
  ) : (
    <JoinWrapper>
      <Spinner color="#000" />
    </JoinWrapper>
  );
}
