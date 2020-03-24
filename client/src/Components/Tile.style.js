import styled, { css } from "styled-components";

const Backgrounds = {
  unflipped: css`
    background: repeating-linear-gradient(
      45deg,
      #dfe5e7,
      #dfe5e7 10px,
      #eaede3 10px,
      #eaede3 20px
    );
  `,
  flippedNeutral: css`
    background: repeating-linear-gradient(
      -45deg,
      #f1f1d9,
      #f1f1d9 10px,
      #f9f9f0 10px,
      #f9f9f0 20px
    );
    color: rgba(102, 102, 102, 0.57);
  `,
  flippedSuddenDeath: css`
    background: repeating-linear-gradient(
      -45deg,
      #7d7d7d,
      #7d7d7d 10px,
      #9c9c9c 10px,
      #9c9c9c 20px
    );
  `,
  flippedRed: css`
    background: repeating-linear-gradient(
      -45deg,
      #c44236,
      #c44236 10px,
      #d56a60 10px,
      #d56a60 20px
    );
  `,
  flippedBlue: css`
    background: repeating-linear-gradient(
      -45deg,
      #3695c4,
      #3695c4 10px,
      #62afd5 10px,
      #62afd5 20px
    );
  `
};

const TileWrapper = styled.div`
  color: #333333;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: ${props => (props.isSpymaster ? "7px" : "13px")};
  margin: 5px;
  cursor: pointer;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  font-weight: bold;
  
  & > span {
    padding: 5px;
  }
  transition: all 0.5s ease;

  ${props =>
    props.flipped &&
    css`
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
      color: rgba(240, 240, 240, 0.57);
    `}

  ${props =>
    props.type === 0 && props.flipped
      ? Backgrounds.flippedNeutral
      : props.type === 1 && props.flipped
      ? Backgrounds.flippedSuddenDeath
      : props.type === 2 && props.flipped
      ? Backgrounds.flippedRed
      : props.type === 3 && props.flipped
      ? Backgrounds.flippedBlue
      : null}

  ${props =>
    props.type === 0 && props.isSpymaster
      ? css`
          border: 6px solid #f1f1d9;
        `
      : props.type === 1 && props.isSpymaster
      ? css`
          border: 6px solid #7d7d7d;
        `
      : props.type === 2 && props.isSpymaster
      ? css`
          border: 6px solid #c44236;
        `
      : props.type === 3 && props.isSpymaster
      ? css`
          border: 6px solid #3695c4;
        `
      : null}
`;

export default TileWrapper;
