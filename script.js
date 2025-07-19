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
    return prompt("Enter your choice")
}


console.log(getHumanchoice())
console.log(getComputerchoice())