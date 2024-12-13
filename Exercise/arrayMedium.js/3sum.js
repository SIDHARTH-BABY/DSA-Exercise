function sumThree(val) {
  let newVal = val.sort((a, b) => a - b);
  let result = [];
  if (newVal.length < 3) return result;

  for (let i = 0; i < newVal.length; i++) {
    if (newVal[i] > 0) break;
    if (i > 0 && newVal[i] === newVal[i - 1]) continue;
    let start = i + 1;
    let end = newVal.length - 1;
    while (start < end) {
      let sum = newVal[i] + newVal[start] + newVal[end];
      if (sum === 0) {
        result.push([newVal[i], newVal[start], newVal[end]]);
        start++;
        end--;
        while (start < end && newVal[start] === newVal[start - 1]) start++;
        while (start < end && newVal[end] === newVal[end + 1]) end--;
      } else if (sum < 0) {
        start++;
      } else if (sum > 0) {
        end--;
      }
    }
  }
  return result;
}

let nums = [-1, 1, 0, 2, -1, -4];

console.log(sumThree(nums));
