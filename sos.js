function playRound(Computerchoice, Humanchoice) {
    if (Computerchoice=="rock" && Humanchoice=="rock")
        humanScore=humanScore;
        computerScore=computerScore
        console.log("round Draw!!!")
    if (Computerchoice=="paper" && Humanchoice=="paper")
        humanScore=humanScore;
        computerScore=computerScore
        console.log("round Draw!!!")
    if (Computerchoice=="scissor" && Humanchoice=="scissor")
        humanScore=humanScore;
        computerScore=computerScore
        console.log("round Draw!!!")
    if (Computerchoice=="rock" && Humanchoice=="paper")
        humanScore=humanScore;
        computerScore+=computerScore
        console.log("Computer +1")
    if (Computerchoice=="paper" && Humanchoice=="rock")
        humanScore=humanScore;
        computerScore+=computerScore
        console.log("Computer +1")
    if (Computerchoice=="scissor" && Humanchoice=="rock")
        humanScore+=humanScore;
        computerScore=computerScore
        console.log("Human +1")
    if (Computerchoice=="paper" && Humanchoice=="scissor")
        humanScore+=humanScore;
        computerScore=computerScore
        console.log("Human +1")
    if (Computerchoice=="rock" && Humanchoice=="scissor")
        humanScore=humanScore;
        computerScore+=computerScore
        console.log("Computer +1")
    if (Computerchoice=="scissor" && Humanchoice=="paper")
        humanScore=humanScore;
        computerScore+=computerScore
        console.log("Computer +1")
    
}
