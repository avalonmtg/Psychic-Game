var letters = ["a", "b", "c"];
var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
    // (i.e. guessesLeft will get displayed in HTML)
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
  };
   
  
var updateLetterToGuess = function (){
    letterToGuess = letters[Math.floor(Math.random()* letters.length)]
}
var updateGuessesSoFar = function (){
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ")
}
var reset = function(){
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}
updateLetterToGuess();
updateGuessesLeft();
document.onkeydown = function(event){
    guessesLeft --;
    var letter = events.key.toLowerCase();
    guessedLetters.push(letter);
    updateGuessesLeft();
updateGuessesSoFar();
if (letter === letterToGuess) {
    wins ++;
    document.querySelector("#wins").innerHTML = wins
    reset();
}
if (guessesLeft === 0){
    losses ++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
}
}
