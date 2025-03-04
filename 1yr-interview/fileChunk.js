function chunk(arr, size) {
  let result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    if (temp.length === size) {
      result.push([...temp]);
      temp.length = 0;
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }

  console.log(temp);

  return result;
}

console.log(chunk([], 1));


//here if you see we are giving temp.length = 0 , instead of temp = [] because if put like that , it will create a new array again and again .
// so alway do like temp.length = 0
