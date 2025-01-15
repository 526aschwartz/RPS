// Ask for the user's name
let userName = prompt("Hello, What is your name?");

// Get the greeting element
let greeting = document.getElementById('greeting');

// display for greeting
userName 
userName ? document.getElementById('greeting').innerText=`Hello, ${userName}!` 
: document.getElementById('greeting').innerText='Hello stranger!'

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Get the scoreboard element
const scoreboard = document.getElementById('scoreboard');

// Function to update the scoreboard
const updateScoreboard = () => {
    scoreboard.innerHTML = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
};

// Function to check if the game is over
const checkGameOver = () => {
  if (userScore === 3) {
      document.getElementById("result").innerHTML = "Congratulations! You win the game!";
      disableButtons();
      userScore = 0
      computerScore = 0
  } else if (computerScore === 3) {
      document.getElementById("result").innerHTML = "Sorry, you lost the game. Computer wins!";
      disableButtons();
      userScore = 0
      computerScore = 0
  }
};


// Disable buttons when the game is over
const disableButtons = () => {
  document.getElementById('rockBtn').disabled = true;
  document.getElementById('paperBtn').disabled = true;
  document.getElementById('scissorsBtn').disabled = true;
};


  
  // computer
  const getComputerPick = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  // winner
  const determineWinner = (userPick, computerPick) => {
    if (userPick === computerPick) {
      return 'No one wins. It\'s a tie';
    }
    if (userPick === 'rock') {
      if (computerPick === 'paper') {
        computerScore++
        updateScoreboard()
        return "Sorry, computer won! :(";
      } else {
        userScore++
        updateScoreboard()
        return "Congrats you won";
      }
    }
    if (userPick === 'paper') {
      if (computerPick === 'scissors') {
        computerScore++
        updateScoreboard()
        return "You Lose :(";
      } else {
        userScore++
        updateScoreboard()
        return "You won";
      }
    }
    if (userPick === 'scissors') {
      if (computerPick === 'rock') {
        computerScore++
        updateScoreboard()
        return "You Lose :(";
      } else {
        userScore++
        updateScoreboard()
        return "You won";
      }
    }
  };
  
  const playGame = (userPick) => {
  
    //computer choice
    const computerPick = getComputerPick();
  
    // Display user and computer choices
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p>You chose: ${userPick}</p>
      <p>The computer chose: ${computerPick}</p>
      <p>${determineWinner(userPick, computerPick)}</p>
    `;
        // Update the scoreboard
        updateScoreboard();

        // Check if the game is over
        checkGameOver();
  };

  // Event listeners for button clicks
  document.getElementById('rockBtn').addEventListener('click', () => playGame('rock'));
  document.getElementById('paperBtn').addEventListener('click', () => playGame('paper'));
  document.getElementById('scissorsBtn').addEventListener('click', () => playGame('scissors'));

  // Initial scoreboard update
updateScoreboard();