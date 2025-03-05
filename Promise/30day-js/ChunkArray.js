function chunkArray(arr, s) {
  let result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    console.log(temp.length);

    if (temp.length === s) {
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
}

let arr = [1, 9, 6, 3, 2];
let size = 3;
console.log(chunkArray(arr, size));
