let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
let startBtn = document.querySelector("#start-btn");
let resetBtn = document.querySelector("#reset-btn");
const arrow = document.getElementById("go-to-game");
const landing = document.getElementById("landing-div");
const game = document.getElementById("game");

// ___________________ Reset Game___________________
function newGame() {
    msg.innerHTML=`<b>Play your move</b>`
    msg.style.backgroundColor= "#83c5be";
    msg.style.color= "#006d77";
    userScorePara.innerHTML = `<u> 0 </u>`;
    compScorePara.innerHTML = `<u> 0 </u>`;
}
resetBtn.addEventListener("click", newGame);

// _______________________Generating the computer choice____________________
const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    // creating the random number so the choice by computer will be generated
    // by giving this random number to the index of array. 
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}
console.log(genCompChoice());

// ___________________________ DRAW GAME _____________________________
const drawGame = () =>{
    msg.innerHTML="PLAY AGAIN! Match was Draw.";
    msg.style.backgroundColor= "#f26a8d ";
    msg.style.color= "#fec5bb";
}

// ____________________________ Showing Winner ___________________
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerHTML = `<u> ${userScore}</u>`;
        msg.innerHTML=`YOU WIN! Your ${userChoice} beats ${compChoice}.`
        msg.style.backgroundColor= "#0a9396";
        msg.style.color= "#d8e2dc";

    }else {
        compScore++;
        compScorePara.innerHTML = `<u> ${compScore}</u>`;
        msg.innerHTML=`YOU LOSE! ${compChoice} beats your ${userChoice}.`
        msg.style.backgroundColor="red";
        msg.style.color= "#fec5bb";
    }


}

const playGame = (userChoice) => {
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log(`Computer choice is: ${compChoice}`);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        //paper,scissor
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        } else if (userChoice === "paper") {
            //scissor,rock
            userWin = compChoice ==="scissor" ? false : true;
        } else {
            //userChoice = scissor
            //rock, paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }

}

//____________________ EACH CHOICE DIV CONTAINER (user choice)__________________
choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        // either rock,paper or scissor
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});

// ______________________ ARROW START BUTTON ____________________
arrow.addEventListener("click", () => {
    landing.style.display = "none";   // hide landing page
    game.style.display = "block";     // show main game
});


// ELSE IF CASE:

    // if (userChoice === "rock") {
    //     if (compChoice === "paper") {
    //         userWin = false;   // Rock loses to Paper
    //     } else {
    //         userWin = true;    // Rock beats Scissor
    //     }
    // } 
    // else if (userChoice === "paper") {
    //     if (compChoice === "scissor") {
    //         userWin = false;   // Paper loses to Scissor
    //     } else {
    //         userWin = true;    // Paper beats Rock
    //     }
    // } 
    // else if (userChoice === "scissor") {
    //     if (compChoice === "rock") {
    //         userWin = false;   // Scissor loses to Rock
    //     } else {
    //         userWin = true;    // Scissor beats Paper
    //     }
    // }


