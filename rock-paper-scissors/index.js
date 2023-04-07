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
        if(computerSelection === "scissors"){
            return "You Win! \nRock beats Scissors "
        } else if (computerSelection === "paper"){
            return "You Lose! \nPaper beats Rock "
        } else {
            return "It's Draw! \nRock = Rock"
        }
    }
    // Case for "Paper"
    if (playerSelection === "paper")
        if(computerSelection === "rock"){
            return "You Win! \nPaper beats Rock"
        } else if (computerSelection === "scissors"){
            return "You Lose! \nScissors beats Paper"
        } else {
            return "It's Draw! \nPaper = Paper"
        }
    // Case for "Scissors"
    if (playerSelection === "scissors") {
        if(computerSelection === "paper"){
            return "You Win! \nScissors beats Paper"
        } else if (computerSelection === "rock"){
            return "You Lose! \nRock beats Scissors" 
        } else {
            return "It's Draw! \nScissors = Scissors"
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