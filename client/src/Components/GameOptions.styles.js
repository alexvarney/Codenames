import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > div {
    background-color: #6b7580a0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 1;
  }
`;

export const Row = styled.div`
  width: 100%;
  flex-basis: 100%;
  flex-grow: 1;
  display: flex;
  margin-bottom: 5px;
`;

export const ContentContainer = styled.div`
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const Banner = styled.div`
  flex-basis: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  & > span {
    display: block;
    padding: 10px;
    font-size: 24px;
  }
`;

export const ButtonStyle = css`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  :active {
    box-shadow: none;
  }

  :focus {
    outline: none;
  }
`;

export const InputButton = styled.button`
  ${ButtonStyle};
  border-radius: 0px 5px 5px 0px;
  display: inline-block;
  flex-basis: 30%;
  background-color: #1f7e93;
  border: 2px solid #3f454b;
  border-left: none;
  color: rgba(0, 0, 0, 0.75);

  :hover {
    color: rgba(0, 0, 0, 0.5);
    background-color: #1f7e93aa;
  }
`;

export const NewGameButton = styled.button`
  background-color: #1f9382;
  border: 2px solid #4b736d;
  border-radius: 5px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.35);
  margin-bottom: 10px;
  text-align: center;
  justify-self: center;
  flex-grow: 1;
  max-width: 75%;
  :hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
  ${ButtonStyle}
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  background-color: #2c3035;
  border: 2px solid #3f454b;
  font-size: 16px;
  color: #f4f5f5;
  padding: 5px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #6b7580;
  }
`;
