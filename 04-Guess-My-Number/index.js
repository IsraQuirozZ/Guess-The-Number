"use strict";

let number = Math.floor(Math.random() * 99 + 1);
let score = 100;
let highscore = 0;

let highScoreMessage = document.querySelector(".highscore");

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

const displayScore = function(score) {
    document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        message.textContent = "No Number!";
    } else {
        if (guess === number) {
            displayMessage("Correct Number");
            displayScore(score);
            document.querySelector(".number").textContent = number;
            // CHANGE BODY COLOR
            document.querySelector("body").style.backgroundColor = "rgb(31, 188, 31)";
            document.querySelector(".number").style.width = "30rem";
            if (score > highscore) {
                highscore = score;
                highScoreMessage.textContent = highscore;
            }
        } else {
            if (score > 10) {
                if (guess > number) {
                    displayMessage("Too High!");
                } else {
                    displayMessage("Too Low!");
                }
                score -= 10;
                displayScore(score);
            } else {
                displayMessage("GameOver!");
                displayScore(score - 10);
            }
        }
    }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 100;
    number = Math.floor(Math.random() * 99 + 1);
    displayMessage("Start Guessing...");
    displayScore(score);
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    highScoreMessage.textContent = highscore;
});

// CORRECT
//Change color // Stablish HighScore //

// INCORRECT