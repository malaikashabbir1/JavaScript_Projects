
let randomNumber = Math.round(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
    e.preventDefault();   //for preventing data from going to server
    const guess= parseInt(userInput.value);
    validateGuess(guess);
    })
};

// for validating that the input is a number
function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("Please Enter a valid number.");
    } else if ( guess < 1) {
        alert("Please Enter a number more than 1.");
    } else if ( guess > 100) {
        alert("Please Enter a number less than 100.");
    } else {
        prevGuess.push(guess)
        displayGuess(guess);
        if(numGuess > 10) {
            displayMessage(`GAME OVER! Random Number was ${randomNumber}.`);
            endGame();
        } else  {
            checkGuess(guess);
        }
    }
};

// for checking the guess right or not
function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`Congratulations! You guessed it right.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Your number is low`); //calling the display message with this argument
    } else if (guess > randomNumber) {
        displayMessage(`Your number is high`);
    }
     
};

// for clearing the input field and calculating the other fields 
// for updating the previous guesses array and remaining attemots
function displayGuess (guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;

}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame (){
    userInput.value = '';
    userInput.setAttribute('disabled',''); //The input is no longer able to receive input.
    p.classList.add('button'); //giving the paragraph a class of button
    p.innerHTML = `<button id="newGame" style="color:white; background-color: black;  font-size:20px;
                    border:none; border-radius: 20px; width: 200px;height: 40px;">
                    Start New Game </button>`       
    startOver.appendChild(p); 
    playGame = false;
    newGame();
}

function newGame (){
    const newGameButton = document.querySelector("#newGame"); //START NEW GAME button that have been created
    newGameButton.addEventListener( 'click', function (e) {
    randomNumber = Math.round(Math.random()*100+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage(``);
    playGame = true;
    })
}
