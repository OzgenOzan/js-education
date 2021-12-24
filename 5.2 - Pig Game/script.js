"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const scorePlayerOneEl = document.querySelector("#score--0");
const scorePlayerTwoEl = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const pointCounterPlayerOne = document.getElementById("current--0");
const pointCounterPlayerTwo = document.getElementById("current--1");
// Corection for a new game
scorePlayerOneEl.textContent = 0;
scorePlayerTwoEl.textContent = 0;
diceEl.classList.add("hidden");

// Players and their current score
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

// Functions
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice
btnRollDice.addEventListener("click", function () {
  if (playing) {
    // Generate Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // Display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // Check if it is 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // Add current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if player's score >= 100
    // Finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener("click", function () {
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
  scorePlayerOneEl.textContent = 0;
  scorePlayerTwoEl.textContent = 0;
  pointCounterPlayerOne.textContent = 0;
  pointCounterPlayerTwo.textContent = 0;
  diceEl.classList.add("hidden");
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
});

/* 
const btnRollDice = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const scorePlayerOne = document.querySelector("#score--0").textContent;
let scorePlayerTwo = document.querySelector("#score--1").textContent;
const pointCounterPlayerOne = document.querySelector("#current--0").textContent;
let pointCounterPlayerTwo = document.querySelector("#current--1").textContent;

const rollFunction = function () {
  Math.trunc(Math.random() * 6) + 1;
};

const resetScores = function () {
  document.querySelector(".score").textContent = 0;
};

document.querySelector(".btn--new").addEventListener("click", resetScores);
 */
