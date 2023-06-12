const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper)')
        )
    {
        return 2;
    } else if (playerSelection === computerSelection) {
        return 1;
    } else {
        return 0;  
    }
}

function capitalize(myString) {
    firstLetter = myString.charAt(0).toUpperCase();
    rest = myString.substr(1).toLowerCase();
    return firstLetter + rest;
}

function game(rounds = 5) {
    let wins = 0;
    let computerWins = 0;
    console.log(`Get ready to play ${rounds} rounds of Rock, Paper, Scissors!`);
    for (let i = 0; i < rounds; i++) {
        let choice;
        while (!choices.includes(choice)) {
            choice = capitalize(prompt(`Rock, Paper, or Scissors? (Round ${i + 1}/${rounds})`));
            if (!choices.includes(choice)) {
                console.log(`Invalid input. Valid inputs: 'rock', 'paper', 'scissors'.`)
            }
        }
        
        let computerChoice = getComputerChoice();
        let result = playRound(choice, computerChoice);
 
        if (result === 2) {
            console.log(`You Won! ${choice} beats ${computerChoice}.`);
            wins++;
        } else if (result === 1) {
            console.log(`It's a tie! You both selected ${choice}.`)
        } else {
            console.log(`You Lost! ${computerChoice} beats ${choice}.`);
            computerWins++;
        }
    }

    console.log(`End result: `);
    if (wins > computerWins) {
        console.log(`You won! `);
    } else if (wins === computerWins) {
        console.log(`Tied!`);
    } else {
        console.log(`You lost!`);
    }
    console.log(`Score: ${wins} vs ${computerWins}.`);
}

game();