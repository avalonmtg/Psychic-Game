var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var updateGuessesLeft = function () {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
    // (i.e. guessesLeft will get displayed in HTML)
    document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
}

var updateLetterToGuess = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)]
}
var updateGuessesSoFar = function () {
    document.querySelector("#guesses-so-far").innerHTML = "Guesses Letters: " + guessedLetters.join(", ");
}
var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}
updateLetterToGuess();
updateGuessesLeft();
document.onkeydown = function (event) {
    guessesLeft--;
    var letter = event.key.toLowerCase();
    guessedLetters.push(letter);
    updateGuessesLeft();
    updateGuessesSoFar();
    if (letter === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        reset();
    }
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
    }
        
}
