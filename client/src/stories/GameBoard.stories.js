import React from "react";
import GameBoard from "../GameBoard";
import StorybookProvider from "./StorybookProvider";

const gameState = [
  {
    name: "Street",
    flipped: false,
    type: 3,
    id: "9efc0b8f-abd4-4cba-b68c-0f01dcffb485"
  },
  {
    name: "Tail",
    flipped: false,
    type: 2,
    id: "bfc8e201-ab4c-40f2-890d-e5089fe79e85"
  },
  {
    name: "Marble",
    flipped: false,
    type: 2,
    id: "4dc1a431-ea48-4b9c-8ce5-56971cad6147"
  },
  {
    name: "Soul",
    flipped: false,
    type: 0,
    id: "f8375d80-8ece-4948-8157-c3f522410f70"
  },
  {
    name: "Purse",
    flipped: false,
    type: 1,
    id: "8d4ec1a7-9c68-404b-a99e-8232e2b9e858"
  },
  {
    name: "Balloon",
    flipped: false,
    type: 0,
    id: "b343e97d-deeb-44df-a379-93383abda214"
  },
  {
    name: "Toast",
    flipped: false,
    type: 0,
    id: "f9b1ffb8-3dcb-4670-82ec-6c73311047bb"
  },
  {
    name: "Himalayas",
    flipped: false,
    type: 3,
    id: "157383a2-d9a0-475e-960c-db9223771e01"
  },
  {
    name: "Ghost",
    flipped: false,
    type: 3,
    id: "f701f1c0-aac5-4e2c-9918-3185cac72f0b"
  },
  {
    name: "Spot",
    flipped: false,
    type: 0,
    id: "a6cb298f-9eaf-4b93-a916-f94a0b44fdd8"
  },
  {
    name: "Robin",
    flipped: false,
    type: 2,
    id: "d7158ad9-3cbc-4123-9600-420ca35cfefe"
  },
  {
    name: "Beat",
    flipped: false,
    type: 2,
    id: "79c589ef-f695-4d34-be08-860935baedd0"
  },
  {
    name: "Casino",
    flipped: false,
    type: 3,
    id: "6f00f38b-77c4-4ed7-99a5-b9e7aa289aab"
  },
  {
    name: "State",
    flipped: false,
    type: 0,
    id: "831e2644-5e00-4235-94f6-f1024d9c9a65"
  },
  {
    name: "Crab",
    flipped: false,
    type: 0,
    id: "d286656f-a418-40e9-b917-1e301b172608"
  },
  {
    name: "Centaur",
    flipped: false,
    type: 3,
    id: "bceaf5d8-873b-4312-b355-8c46c9a82f5b"
  },
  {
    name: "Car",
    flipped: false,
    type: 2,
    id: "201e58e3-1d69-431a-9211-3cc36211400c"
  },
  {
    name: "Draft",
    flipped: false,
    type: 0,
    id: "c1b9ed64-90b5-47a2-ba9d-9cdb7cce4bd2"
  },
  {
    name: "Scarecrow",
    flipped: false,
    type: 0,
    id: "73cdccd6-196c-4ff0-9b5d-2b7d1f18dcc2"
  },
  {
    name: "Marathon",
    flipped: false,
    type: 0,
    id: "6967c66a-2854-46c0-a94a-0c012355d55c"
  },
  {
    name: "Page",
    flipped: false,
    type: 2,
    id: "0040d62d-e583-4148-a311-249d87a5709d"
  },
  {
    name: "Contract",
    flipped: false,
    type: 0,
    id: "e3a2d80e-2bea-4014-b7fe-05e3ae1f6301"
  },
  {
    name: "Round",
    flipped: false,
    type: 2,
    id: "f632363f-8023-4111-a688-625af14612b0"
  },
  {
    name: "Cap",
    flipped: false,
    type: 0,
    id: "80babcfd-2cdd-47b2-a9a7-72f316b4c2a9"
  },
  {
    name: "Flat",
    flipped: false,
    type: 0,
    id: "0068b419-65c7-4ba1-a15d-a77153278ae1"
  }
];

export default {
  title: "Gameboard",
  component: GameBoard
};

export const story = () => (
  <StorybookProvider>
    <GameBoard
      gameState={gameState.map(item => ({ ...item, flipped: true }))}
    />
  </StorybookProvider>
);

story.story = {
  name: "default"
};
