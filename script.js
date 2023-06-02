'use strict';

let score = 20;
let highScore = 0;
const valueHighMessage = '🔺🔺🔺 Too High';
const valueLowMessage = '🔻🔻🔻 Too Low';

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

function setScore(score) {
  document.querySelector('.score').textContent = score;
}

const getRandomNumber = () => {
  return Number(Math.trunc(Math.random() * 20) + 1);
};

let randomNumber = getRandomNumber();
console.log(randomNumber);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!guess) {
      displayMessage('🚫 No Number Entered.');
    } else if (guess === randomNumber) {
      document.querySelector('.number').textContent = randomNumber;
      displayMessage('🎉 Correct Number !!!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== randomNumber) {
      score--;
      displayMessage(guess > randomNumber ? valueHighMessage : valueLowMessage);
    }
    setScore(score);
  } else {
    displayMessage('💥 YOU LOST 💥');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  score = 20;
  setScore(20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
