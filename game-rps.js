function computerPlay() {
    const play = ['Rock', 'Paper', 'Scissors'];
    let result = play[Math.floor(Math.random()* 3)];
    return result;
}

function playRound(playerSelection, computerSelection) { 
    playerSelection = prompt("Pick 1 of the followings: rock, paper, scissors");
    computerSelection = computerPlay();
    if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'rock') {
        return (-1);
    } else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'paper') {
        return (0);
    } else if (computerSelection === 'Paper'&& playerSelection.toLowerCase() === 'scissors') {
        return (1);
    } else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'rock') {
        return (0); 
    } else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'paper') {
        return (1);
    } else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'scissors') {
        return (-1);
    } else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'rock') {
        return (1);
    } else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'paper') {
        return (-1);
    } else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'scissors'){
        return (0);    
    } else {
        alert('I do not understand.')
    }
}

function game() {
    let yourScore = 0;
    let pcScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === 1) {
            yourScore += 1;
            pcScore += 0;
        } else if (result === -1) {
            yourScore += 0;
            pcScore += 1;
        } else if (result === 0) {
            yourScore +=0;
            pcScore += 0;
        } else {
            alert('invalid');
        }

        console.log(`You scored ${yourScore} : computer ${pcScore}`);
    }
    
    if (yourScore > pcScore) {
        return (`You won! You scored ${yourScore} : computer ${pcScore}`);
    } else if (yourScore < pcScore) {
        return (`You lost! You scored ${yourScore} : computer ${pcScore}`);
    } else {
        return (`It's a tie! You scored ${yourScore} : computer ${pcScore}`);
    }
}
console.log(game());