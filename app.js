function computerPlay() {

    let result = Math.floor(Math.random() * 3) + 1;
    let compSelect = 'a';

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

    return compSelect;
}

function playerPlay() {

    let playerSelect = parseInt(prompt('What do you want to play (Enter the corressponding number)\nRock - 1 \nPaper - 2\nScissors - 3'));
    // Actual code to be used when running in console 👆

    // let playerSelect = Math.floor(Math.random() * 3) + 1;
    // Keeping this 👆 here so I can run everything outside the console for testing purposes

    let playerChoice = "wrong input";

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
        console.error('Invalid Input.\nPlease try again and enter the correct value ');;
    }

    return playerChoice;
}


let compCounter = 0;
let playerCounter = 0;

function playRound() {

    let compMove = computerPlay();
    let playerMove = playerPlay();
    let result = "Undecided";

    if (playerMove === compMove) {
        result = "Draw";
    }
    else {
        if ((playerMove == "Rock" && compMove == "Paper") || (playerMove == "Paper" && compMove == "Scissors") || (playerMove == "Scissors" && compMove == "Rock")) {
            result = "Computer Won :(";
            compCounter++;
        }
        else if ((compMove == "Rock" && playerMove == "Paper") || (compMove == "Paper" && playerMove == "Scissors") || (compMove == "Scissors" && playerMove == "Rock")) {
            result = "You won :)";
            playerCounter++;
        }
        else {
            console.error('Wrong input pls try again')
        }
    }

    console.log(`Computer had selected ${compMove}\nYou selected ${playerMove}`);
    console.warn(`Current score: \nPlayer: ${playerCounter}\nComputer: ${compCounter}\n\nRound result: ${result}`);

    return result;
}


function game() {
    for (let i = 0; (compCounter < 5 && playerCounter < 5); i++)
        playRound();
}

game();