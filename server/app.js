const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const uuid = require("uuid");

const port = process.env.PORT || 4001;

const GameManager = require("./game");

app.use("/", express.static("../client/build"));

let games = [];

const removePlayer = (player, game) => {
  if (player && game) {
    game.removeSession(player.session.id);

    if (game.players.length === 0) {
      games = games.filter(gameIter => gameIter._id !== game._id);
    }
  }
};

io.on("connection", function(socket) {
  let game = null;
  let player = null;

  socket.on("create_game", () => {
    removePlayer(player, game);

    game = new GameManager();
    const nickname = player && player.nickname ? player.nickname : null;
    console.log(nickname);

    player = game.addSession(socket, nickname);
    socket.emit("player_update", { ...player, session: true });
    games.push(game);
  });

  socket.on("join_game", gameId => {
    removePlayer(player, game);

    const newGame = games.find(item => item._id === gameId);

    if (newGame) {
      game = newGame;

      const nickname = player && player.nickname ? player.nickname : null;
      player = game.addSession(socket, nickname);

      socket.emit("player_update", { ...player, session: true });
    }
  });

  socket.on("disconnect", () => {
    removePlayer(player, game);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
