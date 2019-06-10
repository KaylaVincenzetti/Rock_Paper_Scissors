//an array to hold the computer choices 
let compChoice = ["r", 'p', 's'];

//chooses random letter from above array for computer choice
compSelection = compChoice[Math.floor(Math.random() * compChoice.length)];
    compChoice = document.getElementById("comp");
    compChoice.innerHTML = "Computer Choice: " + compSelection;
    console.log(compSelection);

//function to allow user to select letter and log to console
document.onkeyup = function(event) {
    let userChoice = event.key; 
    userChoice = document.getElementById("user");
    userChoice.innerHTML = "User Choice: " + event.key;
    console.log(userChoice);


}
