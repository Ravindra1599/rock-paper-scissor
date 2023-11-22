function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = choices[(Math.floor(Math.random() * choices.length))];
    return random;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

// const playerSelection = prompt("Enter your choice rock, paper, or scissors: ").toLowerCase();
// const computerSelection = getComputerChoice();
// console.log(`Player chose: ${playerSelection}`);
// console.log(`Computer chose: ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice rock, paper, or scissors: ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`Player chose: ${playerSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result.includes("Win")) {
            playerScore++;
        }
        else if (result.includes("Lose")) {
            computerScore++;
        }
        console.log(`PlayerScore: ${playerScore}, ComputerScore: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You Win the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You Lose! Suck ittt.");
    }
    else {
        console.log("It's a Tie.")
    }
}

game();