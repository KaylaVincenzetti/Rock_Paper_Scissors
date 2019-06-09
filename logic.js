//an array to hold the computer choices 
let compChoice = ["r", 'p', 's'];

//chooses random letter from above array for computer choice
compSelection = compChoice[Math.floor(Math.random() * compChoice.length)];
console.log(compSelection);

//function to allow user to select letter and log to console
document.onkeyup = function(event) {

let userChoice = event.key; 
console.log(userChoice);

}
