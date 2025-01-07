// Ask for the user's name
let userName = prompt("Hello, What is your name?");

// Get the greeting element
let greeting = document.getElementById('greeting');

// display for greeting
userName 
userName ? document.getElementById('greeting').innerText=`Hello, ${userName}!` 
: document.getElementById('greeting').innerText='Hello stranger!'



const getUserChoice = (userInput) => {
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
  
  const getComputerChoice = () => {
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
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This Game IS A Tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "Sorry, computer won!";
      } else {
        return "Congrats you won";
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "You Lose";
      } else {
        return "You won";
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "You Lose";
      } else {
        return "You won";
      }
    }
  };
  
  const playGame = (userChoice) => {
    // Validate the user choice
    const validUserChoice = getUserChoice(userChoice);
  
    // Get computer choice
    const computerChoice = getComputerChoice();
  
    // Display user and computer choices
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p>You chose: ${validUserChoice}</p>
      <p>The computer chose: ${computerChoice}</p>
      <p>${determineWinner(validUserChoice, computerChoice)}</p>
    `;
  };

  // Event listeners for button clicks
  document.getElementById('rockBtn').addEventListener('click', () => playGame('rock'));
  document.getElementById('paperBtn').addEventListener('click', () => playGame('paper'));
  document.getElementById('scissorsBtn').addEventListener('click', () => playGame('scissors'));