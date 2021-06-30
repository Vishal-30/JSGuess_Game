'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaynumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayWinner = function(color){
  document.querySelector('body').style.backgroundColor = color;
};

const displayWidthonWin = function(width){
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage(' ⛔ No Number');
  // When there is correct number
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number');
    displaynumber(secretNumber);
    displayWinner('#60b347');
    displayWidthonWin('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When the number is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? ' 📈 Too high' : ' 📉 Too low');
    score--;
    displayScore(score);
  } else {
    displayMessage('🎇 You lost the game');
    displayScore(0);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  displaynumber('?');
  document.querySelector('.guess').value = '';
  displayWinner('#222');
  displayWidthonWin('15rem');
});
