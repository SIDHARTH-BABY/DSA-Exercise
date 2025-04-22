// flattened array with depth

function flatenedArray(arr, n, res = [], depth) {
  for (let i = 0; i < arr.length; i++) {
    console.log(depth, "depth", arr[i]);

    if (typeof arr[i] === "number") {
      res.push(arr[i]);
    } else {
      if (depth < n) {
        flatenedArray(arr[i], n, res, depth + 1);
      } else {
        res.push(arr[i]);
      }
    }
  }
  return res;
}

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1;
let res = [];
let depth = 0;
console.log(flatenedArray(arr, n, res, depth));
