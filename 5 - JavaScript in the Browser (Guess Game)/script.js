"use strict";

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 50;

document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCounter = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (points) {
  document.querySelector(".score").textContent = points;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input from player
  if (!guess) {
    displayMessage("⚠ No Number!");

    // When the player guesses right
  } else if (guess === secretNumber) {
    if (scoreCounter > highScore) {
      highScore = scoreCounter;
      document.querySelector(".highscore").textContent = scoreCounter;
    }

    displayMessage("🥳 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When the player's guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreCounter > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      scoreCounter--;
      displayScore(scoreCounter);
    } else {
      displayMessage("😿 You have lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreCounter = 20;
  displayScore(scoreCounter);
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
