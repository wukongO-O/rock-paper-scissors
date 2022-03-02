function computerPlay() {
    const play = ['Rock', 'Paper', 'Scissors'];
    let result = play[Math.floor(Math.random()* 3)];
    return result;
}
computerPlay();
console.log(computerPlay());

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) { 
    if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'rock') {
        return ('You Lose! Paper beats Rock');
    } else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'paper') {
        return ('Tie!');
    } else if (computerSelection === 'Paper'&& playerSelection.toLowerCase() === 'scissors') {
        return ('You Win! Scissors beats Paper');
    } else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'rock') {
        return ('Tie!'); 
    } else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'paper') {
        return ('You Win! Paper beats Rock');
    } else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'scissors') {
        return ('You Lose! Rock beats Scissors');
    } else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'rock') {
        return ('You Win! Rock beats Scissors');
    } else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'paper') {
        return ('You Lose! Scissors beats Paper');
    } else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'scissors') {
        return ('Tie!');    
    }
}

const playerSelection = 'pAper';
console.log(playRound(playerSelection, computerSelection));