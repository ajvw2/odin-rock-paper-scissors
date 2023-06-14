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


const slider = document.querySelector('#score-slider');
const selectedScore = document.querySelector('#selected-score');
selectedScore.textContent = `${slider.value}`;

slider.addEventListener('change', () => {
    selectedScore.textContent = `${slider.value}`;
});

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

const playerScoreDisplay = document.querySelector('.score-amount.player');
const computerScoreDisplay = document.querySelector('.score-amount.computer');

playerScoreDisplay.textContent = `${playerScore}`;
computerScoreDisplay.textContent = `${computerScore}`;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playerChoice = 'Rock';
    rock.classList.add('selected');
    paper.classList.remove('selected');
    scissors.classList.remove('selected');
});

paper.addEventListener('click', () => {
    playerChoice = 'Paper';
    paper.classList.add('selected');
    rock.classList.remove('selected');
    scissors.classList.remove('selected');
});

scissors.addEventListener('click', () => {
    playerChoice = 'Scissors';
    scissors.classList.add('selected');
    rock.classList.remove('selected');
    paper.classList.remove('selected');
});