function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    }   else if (randomNumber === 2) {
        return "Paper";
    }   else {
        return "Scissor";
    }
}

function playRound(upperCasePlayerChoice, upperCaseComputerChoice) {

    if (!(upperCasePlayerChoice === "ROCK" || upperCasePlayerChoice === "PAPER" || upperCasePlayerChoice === "SCISSOR")) {
        return "You didn't input the three choices given. Please try again!"
    }

    if (upperCasePlayerChoice === "ROCK" && upperCaseComputerChoice === "PAPER") {
        return "You lose! Paper beats rock";
    }   else if (upperCasePlayerChoice === "ROCK" && upperCaseComputerChoice === "SCISSOR") {
        return "You win! Rock beats Scissor";
    }   else if (upperCasePlayerChoice === "PAPER" && upperCaseComputerChoice === "ROCK") {
        return "You win! Paper beats Rock";
    }   else if (upperCasePlayerChoice === "PAPER" && upperCaseComputerChoice === "SCISSOR") {
        return "You lose! Scissor beats paper"
    }   else if (upperCasePlayerChoice === "SCISSOR" && upperCaseComputerChoice === "ROCK") {
        return "You lose! Rock beats Scissor";
    }   else if (upperCasePlayerChoice === "SCISSOR" && upperCaseComputerChoice === "PAPER") {
        return "You win! Scissor beats Paper";
    }   else {
        return "DRAW";
    }

}


function game() {

    let userNumberOfWins = 0;
    let userNumberOfLoss = 0;
    let computerNumberOfWins = 0;
    let computerNumberOfLoss = 0;

while (true) {
    
let playerChoice = prompt("What's your bet? Rock, Paper or Scissor");
let upperCasePlayerChoice = playerChoice.toUpperCase();

let computerChoice = getComputerChoice();
let upperCaseComputerChoice = computerChoice.toUpperCase();

let result = playRound(upperCasePlayerChoice, upperCaseComputerChoice); 

console.log(result)

    if (result.includes("win!")) {
        userNumberOfWins++; 
        computerNumberOfLoss++;  
    }   else if (result.includes("lose!")) {
        userNumberOfLoss++;
        computerNumberOfWins++;
    }  
    

    if (userNumberOfWins === 5) {
        console.log(`You are the winner of the game which has ${userNumberOfWins} points`);
        console.log(`Your lose points is ${userNumberOfLoss}`);
        break;
    }   else if (userNumberOfLoss === 5) {
        console.log(`You are the loser of the game which has ${userNumberOfLoss} points`);
        console.log(`Your win points is ${userNumberOfWins}`);
        break;
    }

}

}


game()

     
    

  

