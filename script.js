let pScore = 0;
let cScore = 0;

//start

function startGame() {
  const playBtn = document.querySelector('.play-button');
  const introScreen = document.querySelector('.intro');
  const match = document.querySelector('.match');

  playBtn.addEventListener('click', () => {
    introScreen.classList.add('fadeOut');
    match.classList.add('fadeIn');
  });
}

//play

function play() {
  const options = document.querySelectorAll('.options button');
  const playerHand = document.querySelector('.player-hand');
  const computerHand = document.querySelector('.computer-hand');

  //random computer
  const computerOptions = ['rock', 'paper', 'scissors'];

  options.forEach((test) => {
    test.addEventListener('click', function () {
      const playerChoise = this.innerHTML;
      console.log(playerChoise);
      // computer choise
      const computerNumber = Math.floor(Math.random() * 3);
      console.log(computerNumber);
      const computerChoise = computerOptions[computerNumber];
      console.log(computerChoise);

      compareHands(playerChoise, computerChoise);

      //update images
      playerHand.src = `./img/${playerChoise}.png`;
      computerHand.src = `./img/${computerChoise}.png `;
    });
  });
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
      winner.innerHTML = 'Player win';
      pScore++;
      updateScore();
      return;
    } else {
      winner.innerHTML = 'Computer wins';
      cScore++;
      updateScore();
      return;
    }
  }

  // check for paper

  if (playerChoise === 'paper') {
    if (computerChoise === 'scissors') {
      winner.innerHTML = 'Computer win';
      cScore++;
      updateScore();
      return;
    } else {
      winner.innerHTML = 'Player wins';
      pScore++;
      updateScore();
      return;
    }
  }

  // check for scisssors

  if (playerChoise === 'scissors') {
    if (computerChoise === 'rock') {
      winner.innerHTML = 'Computer win';
      cScore++;
      updateScore();
      return;
    } else {
      winner.innerHTML = 'Player wins';
      pScore++;
      updateScore();
      return;
    }
  }
}

startGame();
play();
