import React, { useContext } from "react";
import TileWrapper from "./Tile.style";

import { GameContext } from "./App";

export default function Tile({ data }) {
  const { flipTile, userState } = useContext(GameContext);
  //const flipTile = () => null;

  if (!userState) return null;

  return (
    <TileWrapper
      onClick={() => flipTile(data.id)}
      flipped={data.flipped}
      type={data.type}
      isSpymaster={userState.isSpymaster}
    >
      <span>{data.name}</span>
    </TileWrapper>
  );
}
