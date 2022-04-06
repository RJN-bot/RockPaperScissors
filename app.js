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

function playerSelection() {
    let playerSelect = parseInt(prompt('What do you want to play (Enter the corressponding number)\nRock - 1 \nPaper - 2\nScissors - 3'));
    if (playerSelect === 1) {
        playerChoice = 'You have selected Rock';
    }
    else if (playerSelect === 2) {
        playerChoice = 'You have selected Paper';
    }
    else if (playerSelect === 3) {
        playerChoice = 'You have selected Scissors';
    }
    else {
        console.error('Invalid Input.\nPlease try again');;
    }
    return playerChoice;
}

console.log(playerSelection());

// console.log(computerPlay());
