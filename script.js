const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");

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

const currentRoundText = document.querySelector("#round-text");
const scoreText = document.querySelector("#round-score-text");

function setScoreText(score){
    scoreText.textContent = score;
}
function setRoundText(round){
    currentRoundText.textContent = "Round " + round;
}

const winText = document.querySelector("#win");
winText.textContent = "";

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
    setScoreText(currentScore);
}
var gameOver = false;
var currentRound = 1;

function resetGame(){
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    currentScore = "0:0";
    setScoreText(currentScore);
    currentRound = 1;
    setRoundText(currentRound);
    winText.textContent = "";
}
function game(){
    computerSelection = getComputerChoice();
    setResultsTexts();
    calculateScore(playRound(playerSelection, computerSelection));
    
        if(playerScore >= 5){
            playerScore = 0;
            computerScore = 0;
            winText.textContent = "You WIN!";
            gameOver = true;
        }
        if(computerScore >= 5){
            playerScore = 0;
            computerScore = 0;
            winText.textContent = "You LOSE!";
            gameOver = true;
        }      
        if(playerScore < 5 || computerScore < 5){
            currentRound++;
            setRoundText(currentRound);
         }

}

function setResultsTexts(){
    computerChoice.textContent = computerSelection.toUpperCase();
    playerChoice.textContent = playerSelection.toUpperCase();
}

function selectRock(){
    if(gameOver === true){
        resetGame();
    }
    playerSelection = "Rock";
    console.log(`Player selects ${playerSelection}`);
    
    game();
}
function selectPaper(){
    if(gameOver === true){
        resetGame();
    }
    playerSelection = "Paper";
    console.log(`Player selects ${playerSelection}`);
    game();
}
function selectScissors(){
    if(gameOver === true){
        resetGame();
    }
    playerSelection = "Scissors";
    console.log(`Player selects ${playerSelection}`);
    game();
}


const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

btnRock.addEventListener("click", selectRock);
btnPaper.addEventListener("click", selectPaper);
btnScissors.addEventListener("click", selectScissors);
