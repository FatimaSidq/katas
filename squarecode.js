function squareCode(input) {
  while (input.includes(" ")) {
    input = input.replace(" ", ""); // remove whitespace from string
  }
  const amount = Math.ceil(Math.sqrt(input.length));
  let result = ""; // initialize empty result string
  for (let j = 0; j < amount; j++) {
    for (let i = 0; i < input.length; i += amount) {
      let char = input[i + j];
      if (char) {
        result += char;
      }
    }
    result += " ";
  }
  return result;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
