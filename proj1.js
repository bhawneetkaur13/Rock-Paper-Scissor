let playerText = document.querySelector("#player")
let compText = document.querySelector("#comp")
let resultText = document.querySelector("#result")
let choice = document.querySelectorAll(".btn")
let player;
let computer;
choice.forEach(button => button.addEventListener("click",()=>{
    player = button.textContent
    computerTurn()
    playerText.textContent = `Player: ${player}`
    compText.textContent = `Computer: ${computer}`
    resultText.textContent = checkWinner()
}))

function computerTurn(){
    let rand  = Math.floor(Math.random()*3)

    if(rand == 1){
        computer = "ROCK"
    }
    else if(rand == 2){
        computer = "PAPER"
    }
    else if(rand == 3){
        computer = "SCISSOR"
    }
}

function checkWinner(){
    if(player==computer){
        return "DRAW"
    }
    else if(computer == "ROCK"){
        return (player=="PAPER")? "You Win" : "You Lose"
    }
    else if(computer == "PAPER"){
        return (player=="ROCK")? "You Lose" :"You Win"
    }
    else if(computer== "SCISSOR"){
        return (player== "PAPER")? "You Lose" :"You Win"
    }
    
}




