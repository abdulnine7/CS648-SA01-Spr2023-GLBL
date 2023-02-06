function rockPaperScissors(userChoice, computerChoice) {
    if(userChoice === "rock" && computerChoice === "scissors")
        window.alert("User Wins !");
    else if(computerChoice === "rock" && userChoice === "scissors")
        window.alert("Computer Wins !");
    else if(userChoice === "scissors" && computerChoice === "paper")
        window.alert("User Wins !");
    else if(computerChoice === "scissors" && userChoice === "paper")
        window.alert("Computer Wins !");
    else if(userChoice === "paper" && computerChoice === "rock")
        window.alert("User Wins !");
    else if(computerChoice === "paper" && userChoice === "rock")
        window.alert("Computer Wins !");
    else if(computerChoice === userChoice)
        window.alert("It\'s a Tie");
}

function main() {
    
    var playAgain;
    do {
        while(true) {
            var userChoice = parseInt(window.prompt("Enter your choice : \n1: Rock\n2: Paper\n3: Scissors"));
            if(userChoice == 1) {
                userChoice = "rock";
                break;
            }
            else if(userChoice == 2) {
                userChoice = "paper";
                break;
            }
            else if(userChoice == 3) {
                userChoice = "scissors";
                break;
            }
            else {
                window.alert("Please enter valid choice !");
                continue;
            }
        }
        
        var computerChoice = Math.round(Math.random() * 10);
        if(computerChoice < 3)
            computerChoice = "rock";
        else if(computerChoice >= 3 && computerChoice < 6)
            computerChoice = "paper";
        else if(computerChoice >= 6 && computerChoice <= 10)
            computerChoice = "scissors";
        rockPaperScissors(userChoice, computerChoice);
        playAgain = window.prompt("Play Again ? y/n");  
    }while(playAgain != "n");
}

main()