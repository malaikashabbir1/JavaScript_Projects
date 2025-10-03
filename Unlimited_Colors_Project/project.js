const randomColor  = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random()*16)];  
       //It's just using bracket notation to access characters inside a string.
    }
    return color;
}
console.log(randomColor());
let IntervalID;
function startChangingColor() {
    if(!IntervalID) {
    IntervalID = setInterval(ChangeBgColor, 1000);

    function ChangeBgColor (){
    document.body.style.backgroundColor =  randomColor();
    }
    }
}

function stopChangingColor() {
    clearInterval(IntervalID);
    IntervalID = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);