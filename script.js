
//getting Computer's choice
function getComputerchoice() {
    let choices=["rock","paper","scissor"];
    const choice= choices[Math.floor(Math.random()*3)];
    document.querySelector("#computerChoice").textContent=choice;
    return choice;
}

// Global variable to store the game state
let gameState = {
    userChoice: null,
    computerChoice: null,
    isWaitingForInput: true
};

//Global variables for score
let cScore=0
let computerScore=document.querySelector("#computerScore")
let uScore=0
let userScore=document.querySelector("#userScore")

//getting User's Choice
function getUserchoice() {
    //variable assign
    var rock=document.querySelector('#rock');
    var paper=document.querySelector('#paper');
    var scissor=document.querySelector('#scissor');

    //returning User's choice
    rock.addEventListener("click", ()=> {
        if (gameState.isWaitingForInput) {
            const userInput="rock";
            document.querySelector("#userChoice").textContent=userInput;
            const computeInput=getComputerchoice();
            
            gameState.userChoice = userInput;
            gameState.computerChoice = computeInput;
            gameState.isWaitingForInput = false;
            
            // Now play the round
            playRound([computeInput, userInput]);
        }
    })
    paper.addEventListener("click", ()=> {
        if (gameState.isWaitingForInput) {
            const userInput="paper";
            document.querySelector("#userChoice").textContent=userInput;
            const computeInput=getComputerchoice();
            
            gameState.userChoice = userInput;
            gameState.computerChoice = computeInput;
            gameState.isWaitingForInput = false;
            
            // Now play the round
            playRound([computeInput, userInput]);
        }
    })
    scissor.addEventListener("click", ()=> {
        if (gameState.isWaitingForInput) {
            const userInput="scissor";
            document.querySelector("#userChoice").textContent=userInput;
            const computeInput=getComputerchoice();
            
            gameState.userChoice = userInput;
            gameState.computerChoice = computeInput;
            gameState.isWaitingForInput = false;
            
            // Now play the round
            playRound([computeInput, userInput]);
        }
    })
}

function playRound(arr) {
    console.log("Computer choice:", arr[0]);
    console.log("User choice:", arr[1]);
    
    // Add your game logic here
    if (arr[0] === arr[1]) {
        document.querySelector("#winComment").textContent="Draw !!!"
    } else if (
        (arr[0] === "rock" && arr[1] === "paper") ||
        (arr[0] === "paper" && arr[1] === "scissor") ||
        (arr[0] === "scissor" && arr[1] === "rock")
    ) {
        document.querySelector("#winComment").textContent="You Win !!!";
        uScore=uScore+1;
        userScore.textContent=String(uScore)
    } else {
        document.querySelector("#winComment").textContent="Computer Wins !!!";
        cScore=cScore+1;
        computerScore.textContent=String(cScore)

    }
    
    // Reset for next round
    gameState.isWaitingForInput = true;
}

// Initialize the game
getUserchoice();

// Reset feature
const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        // Reset scores
        uScore = 0;
        cScore = 0;
        userScore.textContent = '0';
        computerScore.textContent = '0';
        // Reset choices
        document.querySelector('#userChoice').textContent = '';
        document.querySelector('#computerChoice').textContent = '';
        // Reset win comment
        document.querySelector('#winComment').textContent = '';
        // Reset game state
        gameState.userChoice = null;
        gameState.computerChoice = null;
        gameState.isWaitingForInput = true;
    });
}

