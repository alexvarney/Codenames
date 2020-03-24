import React from "react";
import { GameContext } from "../Components/App";

const mockSocketObject = {
  userState: {
    id: "156cc180-3593-4d7c-be55-ca7e6ac394dd",
    nickname: "Unknown User#156c",
    team: null,
    isSpymaster: true,
    session: true
  },
  gameState: {
    id: "156cc180-3593-4d7c-be55-ca7e6ac394dd",
    players: [
      {
        id: "c78c8c51-f857-4c8b-95c4-4b840e50a8d1",
        nickname: "Unknown User#c78c",
        team: 1
      }
    ],
    gameState: [
      {
        name: "Tooth",
        flipped: false,
        type: 2,
        id: "fba7b76b-f8bc-4ab6-b3fd-8527830fdd23"
      },
      {
        name: "Copper",
        flipped: false,
        type: 3,
        id: "80628c80-c12a-4671-8eea-9238a5226088"
      },
      {
        name: "London",
        flipped: false,
        type: 3,
        id: "adea5736-76fd-4412-840f-03d1bac19171"
      },
      {
        name: "War",
        flipped: false,
        type: 0,
        id: "2335bbf9-1812-407e-8175-f3390365b630"
      },
      {
        name: "Pool",
        flipped: false,
        type: 2,
        id: "11c0d301-31c6-4b7f-857a-9b05ffbababa"
      },
      {
        name: "Hair",
        flipped: false,
        type: 1,
        id: "d0d65487-23f7-4472-bee0-eeb45049b122"
      },
      {
        name: "Europe",
        flipped: false,
        type: 0,
        id: "0a960e18-3f12-4627-9df6-724c6e379d88"
      },
      {
        name: "Worm",
        flipped: false,
        type: 3,
        id: "5040bf91-7bd8-4919-837a-3ddf26299187"
      },
      {
        name: "Needle",
        flipped: false,
        type: 0,
        id: "1d5a4bac-7f75-4153-a297-31425d8cf2bf"
      },
      {
        name: "Fair",
        flipped: false,
        type: 3,
        id: "061c2b8e-5f72-4f99-985e-30b2f46b18f1"
      },
      {
        name: "Musketeer",
        flipped: false,
        type: 0,
        id: "147c1bf9-7f0c-4e04-91ca-af07e50d9f1d"
      },
      {
        name: "Barbecue",
        flipped: false,
        type: 0,
        id: "6db63706-4d1c-460e-a3d3-a59e92a825e2"
      },
      {
        name: "Lawyer",
        flipped: false,
        type: 2,
        id: "371a9a19-316f-4786-8470-ae6ff3b0a0e2"
      },
      {
        name: "Seal",
        flipped: false,
        type: 2,
        id: "727e7a1b-3773-49d7-b7ae-03de38fef5bb"
      },
      {
        name: "Kiwi",
        flipped: false,
        type: 3,
        id: "0d5c9dea-1bcb-4096-b6af-51f7bf3e32f5"
      },
      {
        name: "Alien",
        flipped: false,
        type: 3,
        id: "29d3711b-a7a7-4929-9d8f-36e0259c7562"
      },
      {
        name: "Litter",
        flipped: false,
        type: 2,
        id: "3da81840-b5f5-4f2b-bf23-6f4358d4cb61"
      },
      {
        name: "Smell",
        flipped: false,
        type: 0,
        id: "9f91881a-7c3d-4119-a66b-c4e3978a329e"
      },
      {
        name: "Mile",
        flipped: false,
        type: 0,
        id: "66b74bfd-34ad-471c-8590-e343bf8d542a"
      },
      {
        name: "Cover",
        flipped: false,
        type: 2,
        id: "4f6ac20a-33ef-40f2-b4af-0989b30a250a"
      },
      {
        name: "Skyscraper",
        flipped: false,
        type: 0,
        id: "01aacf0c-b3fe-4a65-9495-1ddb43f25315"
      },
      {
        name: "Tie",
        flipped: false,
        type: 0,
        id: "5720350e-2e60-4e6c-bbad-35ecaa3c3f17"
      },
      {
        name: "Skull",
        flipped: false,
        type: 0,
        id: "15b3d891-2647-4b0c-809e-522a552c80e0"
      },
      {
        name: "Charge",
        flipped: false,
        type: 0,
        id: "1cdef427-2cfe-4ca3-a3c9-7854b00cb56c"
      },
      {
        name: "Hose",
        flipped: false,
        type: 2,
        id: "fc9876e5-7f08-4efe-9967-cc444591981c"
      }
    ],
    turn: 0
  },
  flipTile: () => null
};

export default ({ children }) => (
  <GameContext.Provider value={mockSocketObject}>
    {children}
  </GameContext.Provider>
);
