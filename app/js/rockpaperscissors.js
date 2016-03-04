////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } 
    else if (randomNumber < 0.66) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === null){
        move = getInput();
    }
    else {
        move = move;
    }
    return move;
}

function getComputerMove(move) {
    if (move === null){
        move = randomPlay();
    }
    else {
        move = move;
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == 'rock' && computerMove == 'scissors') {
    	winner = "player";
    	console.log("You won!");
    	}
    	
    	else if (playerMove == 'paper' && computerMove == 'rock') {
    	winner = "player";
    	console.log("You won!");
    	}
    	
    	else if (playerMove == 'scissors' && computerMove == 'paper') {
    	winner = "player";
    	console.log("You won!");
    	}
    	
    	else if (playerMove == 'rock' && computerMove == 'paper') {
    	winner = "computer";
    	console.log("Computer wins!");
    	}
    	
    	else if (playerMove == 'paper' && computerMove == 'scissors') {
    	winner = "computer";
    	console.log("Computer wins!");
    	}
    	
    	else if (playerMove == 'scissors' && computerMove == 'rock') {
    	winner = "computer";
    	console.log("Computer wins!");
    	}
    	
    	else {
    		winner = "tie";
    		console.log("It's a tie!");
    	}	
    	
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner(playerMove, computerMove);
    while (playerWins < 5 && computerWins < 5) {
        if (winner === "player") {
            playerWins += 1;
        }
        else if (winner === "computer") {
            computerWins += 1;
        }
        console.log("You chose" + " " + playerMove + "while the computer chose" + " " + computerMove + ".");
        console.log("The winner of this round is" + winner + "!");
        console.log("The score is currently" + " " + playerWins + "to" + computerWins + ".\n");
    }
    getInput();
    randomPlay();
    return [playerWins, computerWins];
}
    playToFive();
