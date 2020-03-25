import React, { useContext } from "react";
import styled from "styled-components";
import { GameContext } from "./App";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 300px;
  font-family: sans-serif;
  & > * {
    display: flex;
    flex-direction: column;
    flex: 1 0 33%;
    text-align: center;
    justify-content: flex-start;
    margin: 0;

    & > button {
      background-color: rgba(0, 0, 0, 0.75);
      color: white;
      height: 35px;
      margin: 5px;
      border: none;
      transform: all 0.35s ease;

      :hover {
        background-color: rgba(0, 0, 0, 0.5);
      }

      :focus {
        outline: none;
      }
    }

    & > p {
      display: block;
      background-color: rgba(0, 0, 0, 0.75);
      margin: 0;
      padding: 7px;
      color: rgba(255, 255, 255, 0.75);
    }
  }
  & > div:nth-child(1) {
    background: #f9f9f0a0;
  }
  & > div:nth-child(2) {
    background: #d56a60a0;
  }
  & > div:nth-child(3) {
    background: #62afd5a0;
  }
`;

const NicknameDisplay = styled.span`
  display: block;
  background-color: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.75);
  margin: 3px;
  padding: 3px;
`;

export default function Component(props) {
  const { gameState, userState, joinTeam, setSpymaster } = useContext(
    GameContext
  );

  if (!gameState || !userState) return null;

  const initialUserReduceState = {
    red: [],
    blue: [],
    none: []
  };

  const users = gameState.players.reduce((acc, current) => {
    if (!current.team) {
      acc.none.push(current);
    } else if (current.team === 1) {
      acc.red.push(current);
    } else if (current.team === 2) {
      acc.blue.push(current);
    }

    return acc;
  }, initialUserReduceState);

  return (
    <Container>
      <div>
        <p>UNASSIGNED</p>
        {users.none.map(user => (
          <NicknameDisplay key={user.id}>
            {user.nickname + (user.isSpymaster ? " (Spymaster)" : "")}
          </NicknameDisplay>
        ))}
      </div>
      <div>
        <p>RED</p>
        {!userState.isSpymaster && !userState.team && (
          <button onClick={() => joinTeam(1)}>Join</button>
        )}
        {users.red.map(user => (
          <NicknameDisplay key={user.id}>
            {user.nickname + (user.isSpymaster ? " (Spymaster)" : "")}
          </NicknameDisplay>
        ))}
        {users.red.find(item => item.id === userState.id) &&
          !userState.isSpymaster && (
            <button onClick={() => setSpymaster(true)}>
              Make Me Spymaster
            </button>
          )}
      </div>
      <div>
        <p>BLUE</p>
        {!userState.isSpymaster && !userState.team && (
          <button onClick={() => joinTeam(2)}>Join</button>
        )}
        {users.blue.map(user => (
          <NicknameDisplay key={user.id}>
            {user.nickname + (user.isSpymaster ? " (Spymaster)" : "")}
          </NicknameDisplay>
        ))}
        {users.blue.find(item => item.id === userState.id) &&
          !userState.isSpymaster && (
            <button onClick={() => setSpymaster(true)}>
              Make Me Spymaster
            </button>
          )}
      </div>
    </Container>
  );
}
