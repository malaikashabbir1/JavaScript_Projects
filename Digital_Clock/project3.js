const clock = document.getElementById('clock');

// here 1000 means it will run after every 1 second
setInterval(function() {
    let date = new Date();
    
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);