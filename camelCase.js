function camelCase(input) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < input.length; i++){
    if (input[i] == " "){
      input = input.substring(0, i) + upper[upper.indexOf(input[i+1]) - 26] + input.substring(i+2);      
    }
  }
  return input;
};
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));  