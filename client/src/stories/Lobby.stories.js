import React from "react";
import Lobby from "../Components/Lobby";
import StorybookProvider from "./StorybookProvider";

export default {
  title: "Lobby",
  component: Lobby
};

export const story = () => (
  <StorybookProvider>
    <Lobby />
  </StorybookProvider>
);

story.story = {
  name: "default"
};
