import React from "react";
import { GameContext } from "../App";

const socketMock = {
  flipTile: () => null
};

export default ({ children }) => (
  <GameContext.Provider value={socketMock}>{children}</GameContext.Provider>
);
