// _________________________ DEALING WITH INPUT FIELD _________________________
let input = document.querySelector("input");

function addNumber(num){
    input.value +=num;
}
function clearInput() {
    input.value ="";
}
function deleteLast() {
    input.value = input.value.slice(0,-1); 
}

// ++++++++++++++++ GOOD APPROACH FOR HANDLING ONLY 2 NUMBERS +++++++++++++++++++++

// let firstNum = "";
// let operator = "";
// // ____________ Taking the input operator ______________________
//  function setOperator(op) {
//      firstNum = input.value;
//        operator = op;
//        input.value="";
//        input.placeholder="";
// }
//_____________________ for this approach, add onclick="setOperatot("+")" in HTML 
    
// function calculate() {
//     let secondNum = input.value;
//     let result;
//     if(operator === "+") {
//         result = parseFloat(firstNum) + parseFloat(secondNum);
//     }  else if(operator === "-") {
//         result = parseFloat(firstNum) - parseFloat(secondNum);
//     }  else if(operator === "x") {
//         result = parseFloat(firstNum) * parseFloat(secondNum);
//     }  else if(operator === "÷") {
//         result = parseFloat(firstNum) / parseFloat(secondNum);
//     } else if(operator === "%") {
//         result = parseFloat(firstNum) % parseFloat(secondNum);
//     }
//     console.log(result);
//     input.value=result;
// }


// _______________ APPROACH FOR HANDLING THE MULTIPLE NUMBERS CALCULATION ________________
function calculate() {
  try {
    let expression = input.value.replace(/x/g, "*").replace(/÷/g, "/");

     // Only allow digits, operators, and decimal points
    if(!/^[0-9+\-*/%. ]+$/.test(expression)){
        input.value = "Error";
        return;
    }
    // eval() is a built-in JavaScript function that takes a string and executes it as if it were JavaScript code.
    let result = eval(expression); 
    input.value = result;
  } catch {
    input.value = "Error";
  }
}
input.value="";


// _____________________toggle dark/light mode
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
//here adding classList to the body because we need to change the background of the body not of the button
    document.body.classList.toggle("dark");

  
  // update button icon
  if(document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});