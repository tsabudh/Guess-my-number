'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
console.log(secretNumber);

// document.querySelector('.number').textContent = secretNumber;
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

//  FUNCTION TO DISPLAY ALL
const displayAll = function (nameOfClass, message) {
  document.querySelector(nameOfClass).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  let guessValue = Number(document.querySelector('.guess').value);

  if (guessValue === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Guess !!';
    displayAll('.message', '🎉 Correct Guess !!');
    // document.querySelector('.number').textContent = secretNumber;
    displayAll('.number', secretNumber);
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'rgb(94, 235, 52)';
    highscore = score > highscore ? score : highscore;
  } else if (guessValue < secretNumber) {
    // document.querySelector('.message').textContent = '📉 Too Low!';
    displayAll('.message', '📉 Too Low!');
    document.querySelector('.guess').value = '';
    score--;
  } else if (guessValue > secretNumber) {
    // document.querySelector('.message').textContent = '📈 Too High!';
    displayAll('.message', '📈 Too High!');

    document.querySelector('.guess').value = '';
    score--;
  } else {
    displayAll('.message', 'Input valid number.');
  }

  //   document.querySelector('.score').textContent = score;
  displayAll('.score', score);
  //   document.querySelector('.highscore').textContent = highscore;
  displayAll('.highscore', highscore);
});

document.querySelector('.again').addEventListener('click', function () {
  //   document.querySelector('.number').textContent = '?';
  displayAll('.number', '?');
  //   document.querySelector('.message').textContent = '😄 Start Guessing !!';
  displayAll('.message', '😄 Start Guessing !!');
  score = 20;
  //   document.querySelector('.score').textContent = score;
  displayAll('.score', score);

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
