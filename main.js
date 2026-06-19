humanScore = 0;
computerScore = 0;


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



function getHumanChoice(){
    var humanChoice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        console.log("Invalid choice.");
        return; 
    }
    return humanChoice;

}

function playRound(humanChoice, computeChoice){
    humanChoice = humanChoice.toLowerCase();


    if (humanChoice == computeChoice){
        console.log("It's a tie!");
    }else if((humanChoice == "rock" && computeChoice == "scissors") ||
             (humanChoice == "paper" && computeChoice == "rock") ||
             (humanChoice == "scissors" && computeChoice == "paper")){
        console.log("You win! " + humanChoice + " beats " + computeChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computeChoice + " beats " + humanChoice);
        computerScore++;
    }



}



function playGame(){
    for (let i =0; i<5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log("Computer Score: " + computerScore);
    console.log("Human Score: "+ humanScore)
}



playGame()