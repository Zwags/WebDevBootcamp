//Generate secret number
var secretNumber = 4;

//Prompt for Guess
var stringGuess = prompt("Guess your number!");
var numberGuess = Number(stringGuess); 
alert("Your number is: " + numberGuess);
//check if guess is correct
if(numberGuess === secretNumber) {
  alert("That's correct!")
}
// check higher
else if(numberGuess > secretNumber) {
  alert("Too high, guess again!")
}
else {
  alert("Too low, guess again!")
}

//check lower
