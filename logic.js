//an array to hold the computer choices 
let compChoice = ["r", "p", "s"];

let wins = 0;
let losses = 0;
let ties = 0;

//function to allow user to select letter 
document.onkeyup = function(event) {
    let userChoice = event.key; 
    // userChoice = document.getElementById("user");
    // userChoice.innerHTML ="User Choice: " + event.key;
    console.log(event.key);

 //chooses random letter from above array for computer choice
let compSelection = compChoice[Math.floor(Math.random() * compChoice.length)];
 //selectes element id from index.html
 // compChoice = document.getElementById("comp");
 //dynamically writes to computer choice (letter selection) to html on page refresh
 // compChoice.innerHTML = "Computer Choice: " + compSelection;
 console.log(compSelection);



if ((userChoice === "r" && compSelection === "s") || (userChoice === "s") && compSelection === "p" || (userChoice === "p" && compSelection === "r")) {
    wins++;
} else if (userChoice === compSelection) {
    ties++
} else {
    losses++
}
    console.log(wins);
    console.log(ties);
    console.log(losses);
}



