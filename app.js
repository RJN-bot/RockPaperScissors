function computerPlay() {
    let result = Math.floor(Math.random() * 3) + 1;
    let compSelect = 'a'
    if (result === 1) {
        compSelect = 'Rock';
    }
    else if (result === 2) {
        compSelect = 'Paper';
    }
    else if (result === 3) {
        compSelect = 'Scissors';
    }
    else {
        compSelect = "unexpected error!";
    }

    // (result === 1) ? (compSelect = 'Rock') : (result === 2) ? (compSelect = 'Paper') : (result === 3) ? (compSelect = 'Rock') : compSelect = 'Unexpected Error pls contact support'
    return compSelect;
}

function playerPlay() {
    let playerSelect = parseInt(prompt('What do you want to play (Enter the corressponding number)\nRock - 1 \nPaper - 2\nScissors - 3'));
    if (playerSelect === 1) {
        playerChoice = 'Rock';
    }
    else if (playerSelect === 2) {
        playerChoice = 'Paper';
    }
    else if (playerSelect === 3) {
        playerChoice = 'Scissors';
    }
    else {
        console.warn('Invalid Input.\nPlease try again and enter the correct value ');;
    }
    return playerChoice;
}

// console.log("You have selected", playerPlay());

function playRound(playerChoice, compSelect) {
    let result = "Undecided";
    if (playerChoice === compSelect) {
        result = "Draw";
    }
    else {
        if ((playerChoice == "Rock" && compSelect == "Paper") || (playerChoice == "Paper" && compSelect == "Scissors") || (playerChoice == "Scissors" && compSelect == "Rock")) {
            result = "You lost! \nComputer Won :("
        }
        else {
            result = "You won :)"
        }
    }
    return result;
}

const compMove = computerPlay();
const playerMove = playerPlay();

console.log(playRound(playerMove, compMove));
console.log(`Computer had selected ${compMove}\nYou selected ${playerMove}`);

//JS logic done 🙀🙀