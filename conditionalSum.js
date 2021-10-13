const conditionalSum = function(values, condition) {
  let total = 0;
  for(let num of values){
    const isEven = num % 2 == 0;
    const isOdd = !isEven;
    if (isEven && condition == "even" || isOdd && condition == "odd"){
      total += num;
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));