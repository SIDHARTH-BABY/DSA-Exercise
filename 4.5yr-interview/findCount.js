function findCount(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

let arr = [1, 2, 2, 3, 3, 4, 5, 6, 6];
console.log(findCount(arr));
