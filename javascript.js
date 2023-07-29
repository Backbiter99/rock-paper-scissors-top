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
    //  console.log("You Win!");
    gameResult = "You Win!";
  } else if (playRound == "computerSelection") {
    const winner =
      computerSelection[0].toUpperCase() + computerSelection.substr(1);
    const loser = playerSelection[0].toUpperCase() + playerSelection.substr(1);

    //  console.log(`You Lose! ${winner} beats ${loser}`);
    gameResult = `You Lose! ${winner} beats ${loser}`;
  } else {
    //  console.log("Tie Game!");
    gameResult = "Tie Game!";
  }
  return gameResult;
}

function game() {
  for (i = 0; i < 5; i++) {
    const result = playOneRound();
    console.log(result);
  }
}

//game();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => {
  const result = playOneRound("rock");
  console.log(result);
  e.stopPropagation();
});

paper.addEventListener("click", (e) => {
  const result = playOneRound("paper");
  console.log(result);
  e.stopPropagation();
});

scissors.addEventListener("click", (e) => {
  const result = playOneRound("scissors");
  console.log(result);
  e.stopPropagation();
});
