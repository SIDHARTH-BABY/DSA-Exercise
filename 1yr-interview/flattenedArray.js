function flattenArray(arr, res) {
  arr.map((item) => {
    if (typeof item != "number") {
      flattenArray(item, res);
    } else {
      res.push(item);
    }
  });
  return res;
}

const nested = [1, [2, [3, [4, 5]], 6], 7];
console.log(flattenArray(nested, []));
