function numberOfVowels(str){
  let amount = 0;
  for(let char of str){
    if (['a','e','i','o','u'].includes(char)){
      amount += 1;
    }
  }
  return amount;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));