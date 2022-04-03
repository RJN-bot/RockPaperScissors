function computerPlay(choice) {
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

console.log(computerPlay());
