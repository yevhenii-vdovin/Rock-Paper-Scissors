let pScore = 0;
let cScore = 0;
const options = document.querySelector('.options');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

options.addEventListener('click', eventHandler);

startGame();

//start

function startGame() {
  const playBtn = document.querySelector('.play-button');
  const introScreen = document.querySelector('.intro');
  const match = document.querySelector('.match');

  playBtn.addEventListener('click', () => {
    introScreen.classList.add('close');
    match.classList.add('open');
  });
}

function computerChoice() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const computerNumber = Math.floor(Math.random() * 3);
  return computerOptions[computerNumber];
}

// eventHandler

function eventHandler(event) {
  const target = event.target;
  if (target.classList.contains('rock')) {
    compareHands(target.textContent, computerChoice());
  }
  if (target.classList.contains('paper')) {
    compareHands(target.textContent, computerChoice());
  }
  if (target.classList.contains('scissors')) {
    compareHands(target.textContent, computerChoice());
  }
  if (target.classList.contains('btn')) {
    playerHand.src = `./img/${target.textContent}.png`;
    computerHand.src = `./img/${computerChoice()}.png `;
  }
}

function updateScore() {
  const playerScore = document.querySelector('.player-score p');
  const computerScore = document.querySelector('.computer-score p');
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
}

function compareHands(playerChoise, computerChoise) {
  //text
  const winner = document.querySelector('.winner');
  if (playerChoise === computerChoise) {
    winner.innerHTML = 'Draw';
    return;
  }

  // check for rock

  if (playerChoise === 'rock') {
    if (computerChoise === 'scissors') {
      playerWin();
    } else {
      computerWin();
    }
  }

  // check for paper

  if (playerChoise === 'paper') {
    if (computerChoise === 'scissors') {
      computerWin();
    } else {
      playerWin();
    }
  }

  // check for scisssors

  if (playerChoise === 'scissors') {
    if (computerChoise === 'rock') {
      computerWin();
    } else {
      playerWin();
    }
  }

  function playerWin() {
    winner.innerHTML = 'Player win';
    pScore++;
    updateScore();
  }
  function computerWin() {
    winner.innerHTML = 'Computer wins';
    cScore++;
    updateScore();
  }
}

//play

// function play() {
//   const options = document.querySelectorAll('.options button');
//   const playerHand = document.querySelector('.player-hand');
//   const computerHand = document.querySelector('.computer-hand');

//   //random computer
//   const computerOptions = ['rock', 'paper', 'scissors'];

//   options.forEach((options) => {
//     options.addEventListener('click', function () {
//       // computer choise
//       const computerNumber = Math.floor(Math.random() * 3);

//       const computerChoise = computerOptions[computerNumber];

//       const playerChoise = this.textContent;

//       compareHands(playerChoise, computerChoise);

//       //update images
//       playerHand.src = `./img/${playerChoise}.png`;
//       computerHand.src = `./img/${computerChoise}.png `;
//     });
//   });
// }
