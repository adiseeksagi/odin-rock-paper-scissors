function getComputerchoice() {
    let a= Math.floor(Math.random()*3);
    if (a==0)
        return "rock"
    if (a==1)
        return "paper"
    if (a==2)
        return "scissor"
}

function getHumanchoice() {
    return prompt("Enter your choice (or type 'quit' to end):");
}

function playRound(Computerchoice, Humanchoice) {
    //draws//
    if (Computerchoice=== Humanchoice) {
        console.log("round DRAW!!!")
    }
    // human wins//
    if (
        (Computerchoice==="rock" && Humanchoice==="paper") || 
        (Computerchoice==="paper" && Humanchoice==="scissor") ||
        (Computerchoice==="scissor" && Humanchoice==="rock") ) {
         humanScore= humanScore+1
         console.log("you win this round!!!")
         return
    }
    //computer wins//
    if ( (Computerchoice==="rock" && Humanchoice==="scissor") ||
        (Computerchoice==="paper" && Humanchoice==="rock") ||
        (Computerchoice==="scissor" && Humanchoice==="paper") ) {
        computerScore= computerScore+1
        console.log("computer wins this round!!!")
        return
    }
}

function playGame() {
    while (computerScore < 5 && humanScore < 5) {
        console.log("Round", i);
        let computerSelection = getComputerchoice();
        let humanSelection = getHumanchoice();
        if (humanSelection === "quit") {
            console.log("Game ended by user.");
            break;
        }
        playRound(computerSelection, humanSelection);
        console.log("Computer score=", computerScore, "& Human score=", humanScore);
        i = i + 1;
    }
    return;
}

function gameWinner() {
    if (humanScore===5) {
        return console.log("You WON")
    }
    if (computerScore===5) {
        return console.log("Computer WON")
    }
}


let humanScore=0
let computerScore=0
let i=1

let startGame=prompt("type 'enter' to start the game")
if (startGame==="enter") {
    console.log("GAME BEGINS")
    playGame()
    gameWinner()
    console.log("Final Computer score= ", computerScore, "& Human score= ",humanScore)
    console.log("GAME ENDS")
} else {
    console.log("fix typo")
}
// end