
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

    function handleUserClick(userInput) {
        // Only allow play if the reset button is not showing 'Start'
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn && resetBtn.textContent === 'Start') {
            return;
        }
        if (gameState.isWaitingForInput) {
            document.querySelector('#userChoice').textContent=userInput;
            const computeInput=getComputerchoice();
            gameState.userChoice = userInput;
            gameState.computerChoice = computeInput;
            gameState.isWaitingForInput = false;
            // Now play the round
            playRound([computeInput, userInput]);
        }
    }

    rock.addEventListener("click", ()=> handleUserClick("rock"));
    paper.addEventListener("click", ()=> handleUserClick("paper"));
    scissor.addEventListener("click", ()=> handleUserClick("scissor"));
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
        document.querySelector("#winComment").textContent="I Win !!!";
        cScore=cScore+1;
        computerScore.textContent=String(cScore)

    }
    
    // Reset for next round
    gameState.isWaitingForInput = true;
}

// Initialize the game
getUserchoice();

// Helper to show Start Game message
function showStartGameMessage() {
    const gamebox = document.getElementById('gamebox');
    if (gamebox) {
        gamebox.innerHTML = '<div id="startGameMsg">Start Game</div>';
    }
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.textContent = 'Start';
    }
}

// On initial load, show Start Game if both scores are zero
if (uScore === 0 && cScore === 0) {
    showStartGameMessage();
}

// Update gamebox to show choices
function updateGameboxChoices() {
    const gamebox = document.getElementById('gamebox');
    if (gamebox) {
        gamebox.innerHTML = `<div>My Choice: <span id="computerChoice">${gameState.computerChoice ? gameState.computerChoice : ''}</span></div><div>Your Choice: <span id="userChoice">${gameState.userChoice ? gameState.userChoice : ''}</span></div>`;
    }
}

// Patch playRound to update gamebox
const originalPlayRound = playRound;
playRound = function(arr) {
    updateGameboxChoices();
    originalPlayRound(arr);
}

// Reset/Start feature
const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (resetBtn.textContent === 'Start') {
            // Start the game: show choices, set button to Reset
            updateGameboxChoices();
            resetBtn.textContent = 'Reset';
            // Reset win comment and state
            document.querySelector('#winComment').textContent = '';
            gameState.userChoice = null;
            gameState.computerChoice = null;
            gameState.isWaitingForInput = true;
        } else {
            // Reset scores
            uScore = 0;
            cScore = 0;
            userScore.textContent = '0';
            computerScore.textContent = '0';
            // Show Start Game message and set button to Start
            showStartGameMessage();
            // Reset win comment
            document.querySelector('#winComment').textContent = '';
            // Reset game state
            gameState.userChoice = null;
            gameState.computerChoice = null;
            gameState.isWaitingForInput = true;
        }
    });
}

// Sakura (cherry blossom) petal animation
(function sakuraBlossom() {
    const container = document.getElementById('sakura-container');
    const petalCount = 18;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    function randomBetween(a, b) {
        return a + Math.random() * (b - a);
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        const startLeft = randomBetween(0, vw - 20);
        const duration = randomBetween(7, 14); // seconds
        const delay = randomBetween(0, 6); // seconds
        const size = randomBetween(12, 22);

        petal.style.left = `${startLeft}px`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.opacity = randomBetween(0.7, 0.95);
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;
        petal.style.transform = `rotateZ(${randomBetween(-30, 30)}deg)`;

        container.appendChild(petal);

        // Remove petal after animation
        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    }

    // Generate petals at intervals
    setInterval(() => {
        if (document.hidden) return;
        createPetal();
    }, 700);

    // Initial petals
    for (let i = 0; i < petalCount; i++) {
        setTimeout(createPetal, i * 400);
    }
})();

