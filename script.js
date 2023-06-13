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

// function deletePlayButton() {
//     this.classList.add('disappear');
//     playButton.addEventListener('transitionend', () => {return;});
// }

let playerScore = 0;
let computerScore = 0;
let round = 1;
let playerChoice;
let computerChoice;

const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const roundDisplay = document.querySelector("#round");

playerScoreDisplay.textContent = `${playerScore}`;
computerScoreDisplay.textContent = `${computerScore}`;
roundDisplay.textContent = `ROUND ${round}`;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playButton = document.querySelector(".play-button");
const roundResult = document.querySelector(".round-result");

const computerChoiceDisplay = document.createElement('div');
computerChoiceDisplay.classList.add('result-text');
const roundResultDisplay = document.createElement('div');
roundResultDisplay.classList.add('result-text');
const roundWinnerDisplay = document.createElement('div');
roundWinnerDisplay.classList.add('winner-text');
roundResult.appendChild(computerChoiceDisplay);
roundResult.appendChild(roundResultDisplay);
roundResult.appendChild(roundWinnerDisplay);


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



playButton.addEventListener('click', (e) => {
    if (!playerChoice) {
        return;
    }
    // Disable game buttons
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    playButton.disabled = true;

    // Delete old result content
    roundResult.removeChild(computerChoiceDisplay);
    roundResult.removeChild(roundResultDisplay);
    roundResult.removeChild(roundWinnerDisplay);
    
    // Fade out play button
    playButton.classList.add('selected');
    // playButton.addEventListener('transitionend', deletePlayButton);

    computerChoice = getComputerChoice();
    
    computerChoiceDisplay.innerHTML = `The computer chose <img class="icon" src="./images/${computerChoice.toLowerCase()}.png">`;
    roundResult.appendChild(computerChoiceDisplay);

    
    let result = playRound(playerChoice, computerChoice);
    if (result == 2) {
        roundResultDisplay.innerHTML = `<img class="icon" src="./images/${playerChoice.toLowerCase()}.png"> beats <img class="icon" src="./images/${computerChoice.toLowerCase()}.png">`;
        roundWinnerDisplay.textContent = 'YOU WON!';
        playerScore++;
        playerScoreDisplay.textContent = `${playerScore}`;
    } else if (result == 1) {
        roundResultDisplay.innerHTML = ' ';
        roundWinnerDisplay.textContent = 'IT\'S A TIE';
    } else {
        roundResultDisplay.innerHTML = `<img class="icon" src="./images/${computerChoice.toLowerCase()}.png"> beats <img class="icon" src="./images/${playerChoice.toLowerCase()}.png">`;
        roundWinnerDisplay.textContent = 'YOU LOST';
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore}`;
    }  
    
    roundResult.appendChild(roundResultDisplay);
    roundResult.appendChild(roundWinnerDisplay);

    // Enable and reset buttons
    rock.disabled = false;
    rock.classList.remove('selected');
    paper.disabled = false;
    paper.classList.remove('selected');
    scissors.disabled = false;
    scissors.classList.remove('selected');
    playButton.disabled = false;
    playButton.classList.remove('selected');

    // Update round
    round++;
    roundDisplay.textContent = `ROUND ${round}`;

});

