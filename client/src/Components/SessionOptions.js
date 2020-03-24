import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GameContext } from "./App";
import { Row, StyledInput, InputButton } from "./GameOptions.styles";
import { MdContentCopy } from "react-icons/md";

const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;

  & svg {
    cursor: pointer;
  }
`;

const GameIdText = styled.span`
  font-family: monospace;
  transition: all 0.1s ease;
  font-size: 14px;
  color: ${props => (props.wasCopied ? "grey" : "white")};
`;

const copyToClipboard = text => {
  navigator.permissions.query({ name: "clipboard-write" }).then(result => {
    if (result.state === "granted" || result.state === "prompt") {
      navigator.clipboard.writeText(text);
    }
  });
};

export default function Component(props) {
  const { userState, gameState, setName } = useContext(GameContext);
  const [nameInputVal, setNameInputVal] = useState("");
  const [wasCopied, setWasCopied] = useState(false);

  const setNickname = () => {
    setName(nameInputVal);
    setNameInputVal("");
  };

  const nickname = userState && userState.nickname;
  const gameID = gameState && gameState.id;

  const copyID = () => {
    copyToClipboard(gameID);
    setWasCopied(true);
    setTimeout(() => setWasCopied(false), 100);
  };

  return (
    <Container>
      <p>
        Game ID: <GameIdText wasCopied={wasCopied}>{gameID}</GameIdText>{" "}
        <MdContentCopy onClick={copyID} />
      </p>
      <Row>
        <StyledInput
          value={nameInputVal}
          onChange={e => setNameInputVal(e.target.value)}
          placeholder={"Name: " + nickname}
        />
        <InputButton onClick={setNickname}>Set Nickname</InputButton>
      </Row>
    </Container>
  );
}
