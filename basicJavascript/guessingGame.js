
console.log("I'm connected!")

var secretNumber = 21;

var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

//If number i correct
if(guess === secretNumber){
  prompt("You guessed it!!");
}

//If number is too low
else if(guess < secretNumber){
    prompt("To low!!!!");
}

//If number is to high
else {
    prompt("Too high!!");
}
