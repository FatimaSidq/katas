function sumLargestNumbers(arr){
  highest = arr[0];
  for(let num of arr){
    if (num > highest){
      highest = num;
    }
  }
  return highest;
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));