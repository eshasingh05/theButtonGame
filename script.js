const gameCodeInput = document.getElementById("game-code");
const playerNameInput = document.getElementById("player-name");
const joinGameBtn = document.getElementById("join-game");
const startGameBtn = document.getElementById("start-game");
const loginScreen = document.getElementById("login-screen");
const gameScreen = document.getElementById("game-screen");
const playerArea = document.getElementById("player-area");
const hostArea = document.getElementById("host-area");
const soundSelect = document.getElementById("sound-select");
const saveSoundBtn = document.getElementById("save-sound");
const playSoundBtn = document.getElementById("play-sound");
const randomSoundBtn = document.getElementById("random-sound");
const scoreTable = document.querySelector("#score-table tbody");

const gameCodesList = [];

const sounds = {
  ding: new Audio("https://www.soundjay.com/button/sounds/button-3.mp3"),
  buzz: new Audio("https://www.soundjay.com/button/sounds/button-4.mp3"),
  cheer: new Audio("https://www.soundjay.com/button/sounds/cheering-3.mp3")
};

let currentPlayerSound = "ding";
let players = [];

// Join Game button logic
joinGameBtn.addEventListener("click", () => {
  const gameCode = gameCodeInput.value.trim();
  const playerName = playerNameInput.value.trim();

  if (!gameCode) {
    alert("Please enter a game code!");
    return;
  } else if (!playerNameInput) {
    alert("Please enter a name!");
    return;
  } else if (!gameCodesList.includes(gameCode)) {
    alert("That game does not exist!");
    return;
  }

  players.push({ name: playerName, score: 0 });
  alert(`Joined game: ${gameCode}`);
  switchToGameScreen(playerName);
});

// Start Game button logic
startGameBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  const gameCode = gameCodeInput.value.trim() || generateGameCode();

  if (!playerName) {
    alert("Please enter a player name.");
    return;
  }

  alert(`Game started! Code: ${gameCode}`);
  players.push({ name: playerName, score: 0 });
  switchToGameScreen(playerName, true);
});

// Save sound
saveSoundBtn.addEventListener("click", () => {
  currentPlayerSound = soundSelect.value;
  alert(`Sound set to ${currentPlayerSound}`);
});

// Play sound
playSoundBtn.addEventListener("click", () => {
  sounds[currentPlayerSound].play();
});

// Play random sound
randomSoundBtn.addEventListener("click", () => {
  const randomSound = Object.keys(sounds)[Math.floor(Math.random() * Object.keys(sounds).length)];
  sounds[randomSound].play();
});

// Helper functions
function switchToGameScreen(playerName, isHost = false) {
  loginScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  if (isHost) {
    hostArea.classList.remove("hidden");
  } else {
    playerArea.classList.remove("hidden");
  }

  updateScoreTable();
}

function generateGameCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function updateScoreTable() {
  scoreTable.innerHTML = "";
  players.forEach((player, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${player.name}</td>
      <td>${player.score}</td>
      <td><button onclick="addScore(${index})">+1</button></td>
    `;
    scoreTable.appendChild(row);
  });
}

function addScore(index) {
  players[index].score++;
  updateScoreTable();
}
