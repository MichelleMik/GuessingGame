/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber= generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){

	return Math.floor(Math.random() * (100 - 1)) + 1;

}

// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
var stats_str = "";
  if(playersGuess > winningNumber){
stats_str = "Your guess is higher and within " + String(playersGuess - winningNumber) +
" of the winning number!";
  } else if (playersGuess < winningNumber){
  stats_str = "Your guess is lower and within " + String(winningNumber - playersGuess) +
  " of the winning number!"; }
  return stats_str;
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
var guesses = [];
var totalGuesses = 0;
if(playersGuess === winingNumber){
console.log("Player wins!");
guesses.push(playersGuess);
totalGuesses++;
} else {
console.log("Try again, wrong answer!");
     if(guesses.indexOf(playersGuess) <= -1){
     guesses.push(playersGuess);
     totalGuesses++;
      }
}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */
