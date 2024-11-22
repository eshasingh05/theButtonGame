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

startGameBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  const gameCode = gameCodeInput.value.trim();

  if (!gameCode) {
    alert("Please enter a game code!");
    return;
  } else if (!playerNameInput) {
    alert("Please enter a name!");
    return;
  } else {
    window.location.href = "https://eshasingh05.github.io/theButtonGame/game.html"; 
  }

});
