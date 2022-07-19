console.log("Script is loaded");

function getComputerChoice(){
    let randomNumber = generateRandomNumber(3);
    switch (randomNumber){
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
function generateRandomNumber(maxLimit){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);

    return rand;
}


function getPlayerChoice(){
    let randomNumber = generateRandomNumber(3);
    switch (randomNumber){
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
var playerSelection = getPlayerChoice();
console.log(playerSelection);
var computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection){
    if(playerSelection === "Rock" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock!";
    } 
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper!";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors!";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors!";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You Win! Scissors beats Paper!";
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock!";
    }
    else if(playerSelection === "Paper" && computerSelection === "Paper"){
        return "You Tie!";
    }
    else if(playerSelection === "Rock" && computerSelection === "Rock"){
        return "You Tie!";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Scissors"){
        return "You Tie!";
    }
}
var playerScore = 0;
var computerScore = 0;
var currentScore = "0:0";

function calculateScore(playRound){
    let text = playRound;
    let resultWin = text.includes("Win");
    let resultLose = text.includes("lose");
    let resultTie = text.includes("Tie");

    if(resultWin){
        playerScore = playerScore + 1;
    }
    if(resultLose){
        computerScore = computerScore + 1;
    }
    currentScore = playerScore + ":" + computerScore;
    console.log(currentScore);
}

function game(){
    playerSelection = getPlayerChoice();
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    calculateScore(playRound(playerSelection, computerSelection));
    
        if(playerScore >= 5){
            playerScore = 0;
            computerScore = 0;
            return console.log("You win!");
        }
        if(computerScore >= 5){
            playerScore = 0;
            computerScore = 0;
            return console.log("You lose!")
        }
        if(playerScore < 5 || computerScore < 5){
            return console.log("Play Again!");
         }
    
}
