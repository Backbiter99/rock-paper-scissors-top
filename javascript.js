function getComputerChoice() {
  const num = Math.round(Math.random() * 2) + 1;
  if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "paper";
  } else return "scissors";
}

const computerChoice = getComputerChoice();

const playerChoice = prompt("Choose between Rock, Paper or Scissors");

