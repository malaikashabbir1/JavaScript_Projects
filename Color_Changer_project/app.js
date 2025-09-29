const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(body);
buttons.forEach( function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === "pink") {
            body.style.backgroundColor = "hotpink"; 
        }
        if(e.target.id === "purple") {
            body.style.backgroundColor = "purple"; 
        }
        if(e.target.id === "blue") {
            body.style.backgroundColor = "rgb(148, 209, 247)"; 
        }
        if(e.target.id === "yellow") {
            body.style.backgroundColor = "yellow"; 
        }
        
    })
});