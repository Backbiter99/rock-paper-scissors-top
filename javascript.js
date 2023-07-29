function getComputerChoice() {
  const num = Math.round(Math.random() * 2) + 1;
  if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "paper";
  } else return "scissors";
}

function getResult(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) return "tie";
  else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    return "playerSelection";
  } else return "computerSelection";
}

function playOneRound(playerSelection) {
  const computerSelection = getComputerChoice();

  const playRound = getResult(computerSelection, playerSelection);

  let gameResult;

  if (playRound == "playerSelection") {
    gameResult = "You Win!";
  } else if (playRound == "computerSelection") {
    const winner =
      computerSelection[0].toUpperCase() + computerSelection.substr(1);
    const loser = playerSelection[0].toUpperCase() + playerSelection.substr(1);
    gameResult = `You Lose! ${winner} beats ${loser}`;
  } else {
    gameResult = "Tie Game!";
  }
  return gameResult;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let result;

rock.addEventListener("click", (e) => {
  if (checkWinner()) {
    return announceWinner();
  }
  result = playOneRound("scissors");
  if (result == "You Win!") {
    playerScore++;
  } else if (result == "Tie Game!") {
  } else {
    computerScore++;
  }
  result = playOneRound("rock");
  e.stopPropagation();
  updateScore();

  if (checkWinner()) {
    return announceWinner();
  }
  printResult.textContent = result;
  buttons.appendChild(printResult);
});

paper.addEventListener("click", (e) => {
  if (checkWinner()) {
    return announceWinner();
  }
  result = playOneRound("scissors");
  if (result == "You Win!") {
    playerScore++;
  } else if (result == "Tie Game!") {
  } else {
    computerScore++;
  }
  result = playOneRound("paper");
  e.stopPropagation();
  updateScore();

  if (checkWinner()) {
    return announceWinner();
  }
  printResult.textContent = result;
  buttons.appendChild(printResult);
});

scissors.addEventListener("click", (e) => {
  if (checkWinner()) {
    return announceWinner();
  }
  result = playOneRound("scissors");
  if (result == "You Win!") {
    playerScore++;
  } else if (result == "Tie Game!") {
  } else {
    computerScore++;
  }
  e.stopPropagation();
  updateScore();

  if (checkWinner()) {
    return announceWinner();
  }
  printResult.textContent = result;
  buttons.appendChild(printResult);
});

const printResult = document.createElement("p");

const buttons = document.querySelector(".button-div");

let playerScore = 0;
let computerScore = 0;

function checkWinner() {
  if (playerScore < 5 && computerScore < 5) return false;
  else return true;
}

const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");

function updateScore() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function announceWinner() {
  let winnerString;
  if (playerScore == 5) {
    winnerString = "Congratulations! You Win";
  } else {
    winnerString = "Game Over! You Lose";
  }
  printResult.textContent = winnerString;
  buttons.appendChild(printResult);
}
