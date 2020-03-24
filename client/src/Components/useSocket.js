import { useEffect, useState } from "react";
import io from "socket.io-client";

export default url => {
  const [socket, setSocket] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [userState, setUserState] = useState(null);

  //Make the initial connection
  useEffect(() => {
    const connection = io(url);
    setSocket(connection);

    return () => {
      socket.close();
    };
  }, []);

  //Setup the event handlers
  useEffect(() => {
    if (socket) {
      socket.on("game_update", res => {
        setGameState(res);
      });
      socket.on("player_update", res => {
        setUserState(res);
      });
    }
  }, [socket]);

  const setName = name => {
    if (socket) {
      socket.emit("set_nickname", name);
    }
  };

  const createGame = () => {
    if (socket) {
      socket.emit("create_game");
    }
  };

  const joinGame = gameId => {
    if (socket) {
      socket.emit("join_game", gameId);
    }
  };

  const flipTile = tileId => {
    if (socket) {
      socket.emit("flip_tile", tileId);
    }
  };

  const joinTeam = teamId => {
    if (socket) {
      socket.emit("set_team", teamId);
    }
  };

  const setSpymaster = value => {
    if (socket) {
      socket.emit("set_spymaster", value);
    }
  };

  return {
    socket,
    gameState,
    setName,
    createGame,
    userState,
    flipTile,
    joinGame,
    joinTeam,
    setSpymaster
  };
};
