const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const result = document.querySelector('#result');
const userScore = document.querySelector('#user-score');
const computerScore = document.querySelector('#computer-score');
const roundResult = document.querySelector('#round-result');


    let userNumberOfWins = 0;
    let userNumberOfLoss = 0;

rockButton.addEventListener('click', () => {
    let upperCasePlayerChoice = rockButton.id.toUpperCase();

    let computerChoice = getComputerChoice();
    let upperCaseComputerChoice = computerChoice.toUpperCase();

    let roundResult = playRound(upperCasePlayerChoice, upperCaseComputerChoice);

    getScore(roundResult);

    matchResult(userNumberOfWins, userNumberOfLoss);

   
    
});


paperButton.addEventListener('click', () => {
    let upperCasePlayerChoice = paperButton.id.toUpperCase();

    let computerChoice = getComputerChoice();
    let upperCaseComputerChoice = computerChoice.toUpperCase();

    let roundResult = playRound(upperCasePlayerChoice, upperCaseComputerChoice);

    getScore(roundResult);

    matchResult(userNumberOfWins, userNumberOfLoss);

   
});

scissorButton.addEventListener('click', () => {
    let upperCasePlayerChoice = scissorButton.id.toUpperCase();

    let computerChoice = getComputerChoice();
    let upperCaseComputerChoice = computerChoice.toUpperCase();

    let roundResult = playRound(upperCasePlayerChoice, upperCaseComputerChoice);

    getScore(roundResult);

    matchResult(userNumberOfWins, userNumberOfLoss);

});

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
        return "You lose the round! Paper beats rock";
    }   else if (upperCasePlayerChoice === "ROCK" && upperCaseComputerChoice === "SCISSOR") {
        return "You win the round! Rock beats Scissor";
    }   else if (upperCasePlayerChoice === "PAPER" && upperCaseComputerChoice === "ROCK") {
        return "You win the round! Paper beats Rock";
    }   else if (upperCasePlayerChoice === "PAPER" && upperCaseComputerChoice === "SCISSOR") {
        return "You lose the round! Scissor beats paper";
    }   else if (upperCasePlayerChoice === "SCISSOR" && upperCaseComputerChoice === "ROCK") {
        return "You lose the round! Rock beats Scissor";
    }   else if (upperCasePlayerChoice === "SCISSOR" && upperCaseComputerChoice === "PAPER") {
        return "You win the round! Scissor beats Paper";
    }   else {
        return  "DRAW";
    }

}

function disableButton() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
}

function getScore(round) {
    if (round.includes('win')) {
        userNumberOfWins++;
        userScore.textContent = userNumberOfWins.toString();
        result.textContent = round;
    } else if (round.includes('lose')) {
        userNumberOfLoss++;
        computerScore.textContent = userNumberOfLoss.toString();
        result.textContent = round;
    }
}

function matchResult(winPoints, losePoints) {
    if (winPoints === 5) {
        result.textContent = "You win the match!";
        disableButton()
    } else if (losePoints === 5) {
        result.textContent = "You lose the match!";
        disableButton()
    }
}



     
    

  

