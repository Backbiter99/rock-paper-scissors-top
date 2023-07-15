function getComputerChoice() {
  const num = Math.round(Math.random() * 2) + 1;
  if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "paper";
  } else return "scissors";
}

const computerChoice = getComputerChoice();

const playerChoice = prompt(
  "Choose between Rock, Paper or Scissors"
).toLowerCase();

function getResult() {
  if (computerChoice == playerChoice) return "tie";
  else if (
    (computerChoice == "rock" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "scissors") ||
    (computerChoice == "scissors" && playerChoice == "rock")
  ) {
    return "playerChoice";
  } else return "computerChoice";
}

function playOneGame() {
  const playGame = getResult();

  if (playGame == "playerChoice") {
//    console.log("You Win!");
    const gameResult = "You Win!";
    return gameResult;
  } else if (playGame == "computerChoice") {
    const winner = computerChoice[0].toUpperCase() + computerChoice.substr(1);
    const loser = playerChoice[0].toUpperCase() + playerChoice.substr(1);

//    console.log(`You Lose! ${winner} beats ${loser}`);
    const gameResult = `You Lose! ${winner} beats ${loser}`;
    return gameResult;
  } else {
//    console.log("Tie Game!");
    const gameResult = "Tie Game!";
    return gameResult;
  }
}

const result = playOneGame();
