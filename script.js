'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//  FUNCTION TO DISPLAY ALL
const displayAll = function (nameOfClass, message) {
  document.querySelector(nameOfClass).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);

  if (guessValue === secretNumber) {
    displayAll('.message', '🎉 Correct Guess !!');
    displayAll('.number', secretNumber);
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'rgb(94, 235, 52)';
    highscore = score > highscore ? score : highscore;
  } else if (guessValue < secretNumber) {
    displayAll('.message', '📉 Too Low!');
    document.querySelector('.guess').value = '';
    score--;
  } else if (guessValue > secretNumber) {
    displayAll('.message', '📈 Too High!');
    document.querySelector('.guess').value = '';
    score--;
  } else {
    displayAll('.message', 'Input valid number.');
  }

  displayAll('.score', score);
  displayAll('.highscore', highscore);
});

document.querySelector('.again').addEventListener('click', function () {
  displayAll('.number', '?');
  displayAll('.message', '😄 Start Guessing !!');
  score = 20;
  displayAll('.score', score);
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
