//an array to hold the computer choices 
let compChoice = ["r", "p", "s"];

let wins = 0;
let losses = 0;
let ties = 0;

let compSelectText = document.getElementById('comp');
let userChoiceText = document.getElementById('user');
let winsText = document.getElementById('win');
let lossesText = document.getElementById('loss');
let tiesText = document.getElementById('tie');
//function to allow user to select letter 
document.onkeyup = function(event) {
    let userChoice = event.key; 
    console.log(event.key);

 //chooses random letter from above array for computer choice
let compSelection = compChoice[Math.floor(Math.random() * compChoice.length)];
    console.log(compSelection);



if ((userChoice === "r" && compSelection === "s") || (userChoice === "s") && compSelection === "p" || (userChoice === "p" && compSelection === "r")) {
    wins++;
} else if (userChoice === compSelection) {
    ties++
} else if ((userChoice === "r" && compSelection === "p") || (userChoice === "s") && compSelection === "r" || (userChoice === "p" && compSelection === "s")) {
    losses++
} else {
    alert("You chose an incorrect key, please select r,p or s!")
}
    console.log(wins);
    console.log(ties);
    console.log(losses);

compSelectText.textContent = "Computer Chose: " + compSelection;
userChoiceText.textContent = "User Chose: " + userChoice;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
tiesText.textContent = "Ties: " + ties;
}




