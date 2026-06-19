humanScore = 0;
botScore = 0;


function getComputerChoice(){
    var computeChoice = "";

    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0){
        computeChoice = "rock";
    } else if (randomNumber == 1){
        computeChoice = "paper";
    } else {
        computeChoice = "scissors";
    }
    
    return computeChoice;
}


function chooseEmoji(choice){
    if (choice == "paper"){
        return "✋"
    }else if (choice == "rock"){
        return "✊"
    }else if (choice == "scissors"){
        return "✌"
    }
}


function playRound(humanChoice, computeChoice){

    let status = document.querySelector('.status');
    let condition = document.querySelector(".condition")
    let playerEmoji = document.querySelector(".player-mark").textContent = chooseEmoji(humanChoice)
    let computerEmoji = document.querySelector(".computer-mark").textContent = chooseEmoji(computeChoice)
    let playerScore = document.querySelector(".player-score")
    let computerScore = document.querySelector(".computer-score")




    if (humanChoice == computeChoice){
        status.textContent = "It's a tie!"
        condition.textContent = "";
        
    }else if((humanChoice == "rock" && computeChoice == "scissors") ||
             (humanChoice == "paper" && computeChoice == "rock") ||
             (humanChoice == "scissors" && computeChoice == "paper")){

        status.textContent = "You Win!";
        condition.textContent = humanChoice + " beats " + computeChoice
        humanScore++;
        playerScore.textContent = "Player: " + humanScore;
    } else {
        status.textContent = "You Lose!";
        condition.textContent =  computeChoice + " beats " + humanChoice;
        botScore++;
        computerScore.textContent = "Computer: " + botScore;
    }



}



function playGame(){
    var humanChoice = ""
    document.addEventListener("click", (e) =>{
        if (e.target.id == "paper" || e.target.id == "rock" || e.target.id == "scissors"){
            humanChoice = e.target.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);

            
        }

    });


    

    
    

    

    
}


playGame();