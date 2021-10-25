let prompt = require("prompt-sync")();

const number = Math.floor(Math.random() * 101);
let attempts = [];

console.log("Guess a number between 1 and 100\n\n");
while (true) {
  let guess = prompt("Guess a number:\n> ");
  if (isNaN(guess)) {
    console.log("Not a number! Try again!");
  } else if (guess == number) {
    break;
  } else if (attempts.includes(guess)) {
    console.log("Already Guessed!");
    continue;
  } else if (guess > number) {
    console.log("Too High!");
  } else if (guess < number) {
    console.log("Too Low!");
  }
  attempts.push(guess);
}

console.log(`You got it! You took ${attempts.length} attempts!`);
