// Ask for the user's name
let userName = prompt("Hello, What is your name?");

// Get the greeting element
let greeting = document.getElementById('greeting');

// display for greeting
userName 
userName ? document.getElementById('greeting').innerText=`Hello, ${userName}!` 
: document.getElementById('greeting').innerText='Hello stranger!'


// start of code
const getUserPick = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "scissors" ||
      userInput === "paper" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error, Please Try Again!");
    }
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
        return "Sorry, computer won! :(";
      } else {
        return "Congrats you won";
      }
    }
    if (userPick === 'paper') {
      if (computerPick === 'scissors') {
        return "You Lose :(";
      } else {
        return "You won";
      }
    }
    if (userPick === 'scissors') {
      if (computerPick === 'rock') {
        return "You Lose :(";
      } else {
    
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
  };

  // Event listeners for button clicks
  document.getElementById('rockBtn').addEventListener('click', () => playGame('rock'));
  document.getElementById('paperBtn').addEventListener('click', () => playGame('paper'));
  document.getElementById('scissorsBtn').addEventListener('click', () => playGame('scissors'));