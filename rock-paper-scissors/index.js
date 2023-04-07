function getComputerChoice() {
    // randomNum for select one of three choice 
    let randomNum = (Math.floor(Math.random()*10))
    
    // condition for choice 
    if(randomNum <= 3){
        // let answer = randomNum  + " " + "Rock";
        return "rock"
    } else if (randomNum > 3 && randomNum <= 6) {
        // let answer = randomNum  + " " + "Paper";
        return "paper"
    } else {
        // let answer = randomNum  + " " + "Scissors";
        return  "scissors"
    }
}

function playRound( playerSelection, computerSelection) {
    // case for "Rock"
    if(playerSelection === "rock") {
        if(playerSelection === "rock" && computerSelection === "scissors"){
            return `You Win! ${playerSelection} beats ${computerSelection} `
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            return `You Lose! ${playerSelection} beats ${computerSelection} `
        } else {
            return "It's Draw!"
        }
    }
    // Case for "Paper"
    if (playerSelection === "paper")
        if(playerSelection === "paper" && computerSelection === "rock"){
            return `You Win! ${playerSelection} beats ${computerSelection}`
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            return `You Lose! ${playerSelection} beats ${computerSelection}`
        } else {
            return "It's Draw!"
        }
    // Case for "Scissors"
    if (playerSelection === "scissors") {
        if (playerSelection === "scissors")
        if(playerSelection === "scissors" && computerSelection === "paper"){
            return `You Win! ${playerSelection} beats ${computerSelection} `
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            return `You Lose! ${playerSelection} beats ${computerSelection} `
        } else {
            return "It's Draw!"
        }
    }
}

// to get user choice
let userInput = prompt("Your choice?", "Scissors")
playerSelection = userInput.toLowerCase();

// loop for 5 rounds 
function game() {
    for( let i = 1; i <= 5; i ++) {
        console.log(`Round ${i}:`)
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

console.log(game())