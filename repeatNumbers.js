function repeatNumbers(data) {
  let result = "";
  for(let arr of data){
    for(let i = 0; i < arr[1]; i++){
      result += arr[0].toString();
    }
    if (data[data.length - 1] != arr){
    result += ", ";
  }
  }

  return result;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));