/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.


$(document).ready(function() {
//$("body").addClass("animated hinge");
//var guessForm = playersGuessSubmission();
//var generate = generateWinningNumber();
//winningNumber;
//winningNumber = generateWinningNumber();
console.log(winningNumber);
$('#guessSubmit').on('click', playersGuessSubmission);
console.log(playersGuesses[-1]);
$('#hint').on('click',provideHint);
$('#playAgain').on('click', playAgain);


});
var playersGuess;
var playersGuesses = [];
var winningNumber;
var winningNumber = generateWinningNumber();
var counter = 0;
var totalGuesses = 8;




/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){

	return Math.floor(Math.random() * (100 - 1)) + 1;
	

}

// Fetch the Players Guess


function playersGuessSubmission(){
   playersGuess = $('#guessInput').val();
   //playersGuesses.push(playersGuess);
   //checkGuess(playersGuess, winningNumber)  not sure if sending global
   //variable values into this function is even necessary
   checkGuess();
   console.log(playersGuess);
   $('#guessInput').val("");
   
}

// Determine if the next guess should be a lower or higher number


// Check if the Player's Guess is the winning number 

function checkGuess(){
if(totalGuesses > 0) {
if(playersGuesses === winningNumber){
$('#guessFeedback').html("<strong>You won! Good job!!!</strong>");
}   else {
if((playersGuesses.length > 1) && (playersGuesses.indexOf(playersGuess) > -1)){
 $('#guessFeedback').html("<i>You already tried this guess and it didnt't work! try again!!!</i>");
 } else {
   $('#guessFeedback').html(guessMessage());
   playersGuesses.push(playersGuess); 
   totalGuesses--;
   $('#guessCounter').html(totalGuesses);
       }
   }
   } else {
   $('#guessFeedback').html("<strong>Sorry you lost. You're all out of guesses!</strong>");
   //playAgain();
   
        }
 }
 
 
 
 //not sure if the guessMessage needs to take in playerGuess and winningNumber or if they are available globally
function guessMessage(){
var guess_str = "";
var lower_higher = lowerOrHigher();
var diff_between = Math.abs(playersGuess - winningNumber)
guess_str = lower_higher + " and " + diff_between + " from the winning number!";
return guess_str;
}


function lowerOrHigher(){
var str = "";
if(playersGuess > winningNumber){
str =  "Your guess is higher than the winning number!";
} else {
str = "Your guess is lower than the winning number!";
}
//guessMessage will invoke this function
return str;
}


// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again


function playAgain(){

 totalGuesses = 8;
 $('#guessCounter').html(totalGuesses);
 $('#guessFeedback').html("");
 playersGuesses = [];
 winningNumber = generateWinningNumber();
console.log(winningNumber);
  
}


/* **** Event Listeners/Handlers ****  */

