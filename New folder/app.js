// Generate a random secret number between 1 and 100 (inclusive)
const secretNumber = Math.floor(Math.random() * 100) + 1;
let roundsLeft = 10;
let wins = 0;

const messageEl = document.getElementById('message');
const guessEl = document.getElementById('guess');
const roundsLeftEl = document.getElementById('rounds-left');
const winsEl = document.getElementById('wins');
const submitGuessBtn = document.getElementById('submit-guess');

submitGuessBtn.addEventListener('click');  function() {
  const guess = parseInt(guessEl.value);
}
  

  // Check if guess is a valid number and within range (1-100)
  if (isNaN(guess) || guess < 1 || guess > 100) {
    messageEl.textContent = 'Please enter a valid number (1-100).';
    
  }

  roundsLeft--;
  roundsLeftEl.textContent = `Rounds Left: ${roundsLeft}`;

  // Check if guess matches secret number
  if (guess === secretNumber) {
    messageEl.textContent = 'Congratulations! You guessed the number!'};
