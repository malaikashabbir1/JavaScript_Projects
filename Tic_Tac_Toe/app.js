let boxes = document.querySelectorAll(".box");
let resetBtn =  document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count=0;

// PLayers Turn
let turn0= true;  //playerX, playerO

// ______________WINNING PATTERNS_____________
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// ______________Adding Event Listners______________________
boxes.forEach( (box)=> {
    box.addEventListener("click", ()=>{
        console.log("BOX IS CLICKED.")
        if(turn0){
            // Player O
            box.innerHTML = "O";
            box.style.color = "white";      //specifying the color for 'O'
            turn0 = false;
        }else{
            // Player X
            box.innerHTML = "X";
            box.style.color = "black";      //specifying the color for 'X'
            turn0 = true;
        }
        box.disabled = true;
        
        // _________________Checking for Draw Condition __________________
        count++;
        console.log(`COUNTS: ${count}`)
//____Writing the function name with **()** (like checkWinner()`) calls the function immediately
        let isWinner = checkWinner();
        if(count == 9 && !isWinner) {
            console.log(`counts are 9, no winner`);
            drawGame();
        }   
    });
});

// __________________________ Draw Game Function ____________________________
const drawGame = () => {
    msg.innerText="Game was a Draw.";
    msgContainer.classList.remove("hide");
    count = 0;

}

// ________Disabling the boxes, after the one winner, No one can play the game._____
const disabledBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
} 
// __________________ Enabling the boxes for RESET and NEWGAME buttons ________________
const enabledBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
} 

// ___________RESET GAME BUTTON _________
const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}

// _____________WINNER MESSAGE ___________
const showWinner = (winner) =>{ 
    msg.innerText = `Congratulations! The winner is ${winner}`;
    console.log(`Congratulations! The winner is ${winner}`)
    msgContainer.classList.remove("hide");
    disabledBoxes();
} 

// __________________ Checking the Patterns for winnng condition__________________
let checkWinner = ()=> {
    for(let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val &&  pos2Val === pos3Val){
                console.log("WINNER", pos1Val);
                showWinner(pos1Val); 
                return true;  
            } ;
        }
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


// //  console.log(pattern);
// //         console.log(pattern[0], pattern[1], pattern[2]);
// //         console.log( boxes[pattern[0]].innerText,
// //                      boxes[pattern[1]].innerText,
// //                      boxes[pattern[2]].innerText
// //                     );