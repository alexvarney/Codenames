import React from "react";
import GameBoard from "../Components/GameBoard";
import StorybookProvider from "./StorybookProvider";

export default {
  title: "Gameboard",
  component: GameBoard
};

export const story = () => (
  <StorybookProvider>
    <GameBoard />
  </StorybookProvider>
);

story.story = {
  name: "default"
};
