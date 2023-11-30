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
let playerScore = 0;
let computerScore = 0;

function game(playerSelection) {
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    document.body.appendChild(resultDiv);

    // for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();

        // Update the result div
        resultDiv.textContent = `Player chose: ${playerSelection}\nComputer chose: ${computerSelection}\n`;

        const result = playRound(playerSelection, computerSelection);

        // Append the result to the existing content
        resultDiv.textContent += result + "\n";

        if (result.includes("Win")) {
            playerScore++;
        }
        else if (result.includes("Lose")) {
            computerScore++;
        }
    // }

    // Display running score
    const score = document.createElement("div");
    score.classList.add("score");
    document.body.appendChild(score);

    score.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`;

    // Check if either player has reached 5 points
    if (playerScore === 5 || computerScore === 5) {
    //     // Announce the winner
        const winnerMessage = document.createElement("div");
        if (playerScore > computerScore) {
            winnerMessage.textContent = "You win the game!";
        }
        else if (playerScore < computerScore) {
            winnerMessage.textContent = "You lose!";
        }
        else {
            winnerMessage.textContent = "It's a tie!";
        }
        resultDiv.appendChild(winnerMessage);

        // Disable buttons to prevent further plays
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

const div = document.createElement("div");
div.id = "buttonsContainer";
document.body.appendChild(div);

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

const buttonsContainer = document.querySelector("#buttonsContainer");
buttonsContainer.appendChild(rockBtn);
buttonsContainer.appendChild(paperBtn);
buttonsContainer.appendChild(scissorsBtn);

rockBtn.addEventListener("click", () => {
    game("rock");
})
paperBtn.addEventListener("click", () => {
    game("paper");
})
scissorsBtn.addEventListener("click", () => {
    game("scissors");
})