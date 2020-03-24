const uuid = require("uuid");
const words = require("./words");

const tileTypes = {
  neutral: 0,
  suddenDeath: 1,
  teamA: 2,
  teamB: 3
};

const generateGameState = () => {
  const gameWords = [];

  //Get 25 unique words
  while (gameWords.length < 25) {
    let randomWord = null;

    while (randomWord === null || gameWords.includes(randomWord)) {
      randomWord = words[Math.floor(Math.random() * words.length)];
    }

    gameWords.push(randomWord);
  }

  //Get unique words for Team A
  const team1Words = [];
  while (team1Words.length < 7) {
    let randomIndex = null;

    while (randomIndex === null || team1Words.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * gameWords.length);
    }

    team1Words.push(randomIndex);
  }

  //Get unique words for Team B
  const team2Words = [];
  while (team2Words.length < 6) {
    let randomIndex = null;

    while (
      randomIndex === null ||
      team1Words.includes(randomIndex) ||
      team2Words.includes(randomIndex)
    ) {
      randomIndex = Math.floor(Math.random() * gameWords.length);
    }

    team2Words.push(randomIndex);
  }

  //Get sudden death tile
  let suddenDeathIndex = null;
  while (
    suddenDeathIndex === null ||
    team1Words.includes(suddenDeathIndex) ||
    team2Words.includes(suddenDeathIndex)
  ) {
    suddenDeathIndex = Math.floor(Math.random() * gameWords.length);
  }

  return gameWords.map(word => {
    const wordIndex = gameWords.indexOf(word);

    let tileType = tileTypes.neutral;

    if (team1Words.includes(wordIndex)) {
      tileType = tileTypes.teamA;
    } else if (team2Words.includes(wordIndex)) {
      tileType = tileTypes.teamB;
    } else if (suddenDeathIndex === wordIndex) {
      tileType = tileTypes.suddenDeath;
    }

    return {
      name: word,
      flipped: false,
      type: tileType,
      id: uuid.v4()
    };
  });
};

class GameManager {
  constructor() {
    console.log("constructor called!");

    this._id = uuid.v4();
    this._gameState = generateGameState();
    this._players = [];
    this._turn = 0;
  }

  get players() {
    return this._players.map(player => ({
      id: player.id,
      nickname: player.nickname,
      team: player.team
    }));
  }

  get state() {
    return {
      id: this._id,
      players: this.players,
      gameState: this._gameState,
      turn: this._turn
    };
  }

  updatePlayers() {
    this._players.forEach(player => {
      player.session.emit("game_update", this.state);
    });
  }

  updateUserData(player) {
    const response = { ...player };
    delete response.session;
    this.updatePlayers();
    player.session.emit("player_update", response);
  }

  addSession(session, nickname = null) {
    const id = uuid.v4();

    const player = {
      id: id,
      nickname: nickname || "Unknown User#" + id.slice(0, 4),
      team: null,
      isSpymaster: false,
      session: session
    };

    this._players.push(player);
    this.updatePlayers();

    session.on("flip_tile", tileId => {
      this.flipTile(tileId);
    });

    session.on("set_nickname", nickname => {
      player.nickname = nickname;
      this.updateUserData(player);
    });

    session.on("set_codemaster", value => {
      player.isSpymaster = value;
      this.updateUserData(player);
    });

    return player;
  }

  removeSession(sessionId) {
    this._players = this._players.filter(
      player => player.session.id !== sessionId
    );
  }

  setCodemaster(id, value) {
    const user = this._players.find(player => player.id === id);

    if (user) {
      user.isSpymaster = value;
      this.updatePlayers();
      return user;
    }
  }

  flipTile(tileID) {
    console.log("flipTile!");

    const tile = this._gameState.find(item => item.id === tileID);
    tile.flipped = !tile.flipped;
    this.updatePlayers();
  }
}

module.exports = GameManager;
