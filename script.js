// Game functions
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
        )
    {
        return 2;
    } else if (playerSelection === computerSelection) {
        return 1;
    } else {
        return 0;  
    }
}

function updateScores(roundResult) {
    if (roundResult === 2) {
        playerScore++;
    } else if (roundResult === 0) {
        computerScore++;
    }
    setScores(playerScore, computerScore);
}

// UI functions
function setScores(pScore, cScore) {
    const playerScoreDisplay = document.querySelector('.score-amount.player');
    const computerScoreDisplay = document.querySelector('.score-amount.computer');
    playerScoreDisplay.textContent = `${pScore}`;
    computerScoreDisplay.textContent = `${cScore}`;
}



// Score requirement slider behavior
const slider = document.querySelector('#score-slider');
const selectedScore = document.querySelector('#selected-score');
selectedScore.textContent = `${slider.value}`;

slider.addEventListener('change', () => {
    selectedScore.textContent = `${slider.value}`;
});

// Game variables
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let result;

setScores(playerScore, computerScore);

// Game buttons
const gameButtons = document.querySelectorAll('.game-button');

// Game execution
gameButtons.forEach((gameButton) => {
    if (!gameButton.id.startsWith("computer")) {
        gameButton.addEventListener('click', () => {
            playerChoice = `${gameButton.id}`;
            gameButton.classList.add('selected');

            // Remove selection from all other buttons
            gameButtons.forEach((gB) => {
                if (gB !== gameButton) {
                    gB.classList.remove('selected');
                }
            });

            // Get computer choice
            computerChoice = getComputerChoice();
            console.log(computerChoice);
            gameButtons.forEach((gB) => {
                if (gB.id.startsWith('computer') && gB.id.endsWith(computerChoice)) {
                    gB.classList.add('selected');
                }
                // Disable all buttons temporarily when choice has been made
                gB.disabled = true;
            });
            
            // Play round, add to 
            result = playRound(playerChoice, computerChoice);
            updateScores(result);

            // Remove selected from all buttons and re-enable
            gameButtons.forEach((gB) => {
                gB.classList.remove('selected');
                gB.disabled = false;
            })
        });
    }  
});






