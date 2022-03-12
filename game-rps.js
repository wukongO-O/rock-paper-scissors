const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const display = document.querySelector('#display');
const result = document.querySelector('#result');
const replay = document.querySelector('#reset');
let playerSelection;
let computerSelection;
let yourScore = 0;
let pcScore = 0;

function computerPlay() {
    const play = ['rock', 'paper', 'scissors'];
    let result = play[Math.floor(Math.random()* 3)];
    return result;
}

function playRound(playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) {
        return (0);
    } else if (computerSelection == 'paper' && playerSelection == 'rock' ||
     computerSelection == 'rock' && playerSelection == 'scissors' ||
     computerSelection == 'scissors' && playerSelection == 'paper') {
        return (-1);
    } else if (computerSelection == 'paper'&& playerSelection == 'scissors' || 
     computerSelection == 'rock' && playerSelection == 'paper' ||
     computerSelection == 'scissors' && playerSelection == 'rock') {
        return (1);   
    } 
}

function game() {
    let result = playRound(playerSelection, computerSelection);
    if (result === 1) {
        yourScore += 1;
        pcScore += 0;
    } else if (result === -1) {
        yourScore += 0;
        pcScore += 1;
    } else if (result === 0) {
        yourScore +=1;
        pcScore += 1;
    };
    display.textContent = `You scored ${yourScore} : computer scored ${pcScore}`;
};

function final() {
    if (yourScore == 5 || pcScore == 5) {
        if (yourScore > pcScore) {
            result.textContent = `You won this round! You scored ${yourScore} : computer scored ${pcScore}`;
        } else if (yourScore < pcScore) {
            result.textContent = `You lost this round! You scored ${yourScore} : computer scored ${pcScore}`;
        } 
    }  
};

function reset() {
    let replay;
    if (confirm('Play again?') == true) {
        replay = 'OK';
        display.textContent = '';
        result.textContent = '';
        yourScore = 0;
        pcScore = 0;
    } else {
        replay = 'Nah';
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (yourScore < 5 && pcScore < 5) {
            playerSelection = button.id;
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            game();
            final(); 
        }   
    });
});

replay.addEventListener('click', () => {
  reset();
});
