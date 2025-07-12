const arr = [1, 2, 3, 4, [3, 4, 5, [4, 5, 6]]];

function flattenedArray(val, result) {
  for (let i = 0; i < val.length; i++) {
    if (typeof val[i] === "number") {
      result.push(val[i]);
    } else {
      flattenedArray(val[i], result);
    }
  }
  return result;
}
console.log(flattenedArray(arr, []));



