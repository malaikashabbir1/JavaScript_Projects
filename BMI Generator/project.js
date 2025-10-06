const form = document.querySelector("form");
console.log(form);
form.addEventListener ("submit", function (e) {
    e.preventDefault();
    // these values must be taken in the function. Because it's an event listener value will be captured 
    // during event.Otherwise useCase value is empty. 
    const height = parseInt(document.querySelector("#height").value); 
    // .value:         Get the value currently entered in that input field  
    const weight = parseInt(document.querySelector("#weight").value); 
    const result = document.querySelector("#result");
    // const condition = document.querySelector("#condition"); 
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    
    if(height === '' || height < 0  || isNaN(height)) {
        result.innerHTML = `Please enter a valid height `; 
    } 
    else if(weight === '' || weight < 0  || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight `; 
    } 
    // SHOWING THE CONDITION
    else if( bmi < 18.6){
        result.innerHTML = ` The BMI is : ${bmi}, You are underweight.`;
    }
    else if (bmi >= 18.6  && bmi <= 24.6 ) {
         result.innerHTML = `<span> The BMI is : ${bmi}, You fall within the normal range.</span>`;
    }
    else {
         result.innerHTML = `<span> The BMI is : ${bmi}, You are Overweight.</span>`;
    }
});
