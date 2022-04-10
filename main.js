const computerChoiceDisplay = document.getElementById("computerChoice");
const playerChoiceDisplay = document.getElementById("playerChoice");
const resultDisplay = document.getElementById("result");

const buttons = document.querySelectorAll("button");

// const clickhandler= () => {
//     console.log("fsnfbg")
// }
let computerChoice;
let playerChoice;
let result;

buttons.forEach(button => button.addEventListener("click", (e)=>{
    playerChoice = e.target.id;
    playerChoiceDisplay.innerText = playerChoice;
    computerChance();
    computerChoiceDisplay.innerText = computerChoice;
    getResult();
}))

const computerChance = () => {
    const randomNumber = Math.floor((Math.random() * buttons.length)+1);
    if(randomNumber === 1){
        computerChoice = "rock"
    }if (randomNumber === 2){
    computerChoice =  "paper"
    }if(randomNumber === 3){
        computerChoice =  "scissors"
    }
}

const getResult = () => {
    if(computerChoice === playerChoice){
        result = "It's a tie."
    }if(computerChoice === "rock" && playerChoice === "scissors" ){
        result = "Computer wins"
    }if(computerChoice === "paper" && playerChoice === "rock" ){
        result = "Computer wins"
    }if(computerChoice === "scissors" && playerChoice === "paper" ){
        result = "Computer wins"
    }else{
        result = "player Wins"
    }
    resultDisplay.innerText = result;
}




// if(computerChoice === "rock" && playerChoice === "paper" ){
//     result = "Player wins"
// }if(computerChoice === "paper" && playerChoice === "scissors" ){
//     result = "Player wins"
// }if(computerChoice === "scissors" && playerChoice === "rock" ){
//     result = "Player wins"
// }