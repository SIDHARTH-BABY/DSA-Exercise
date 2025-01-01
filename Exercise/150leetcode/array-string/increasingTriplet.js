function increasingTriplet(nums) {
  let numOne = Number.MAX_SAFE_INTEGER;
  let numTwo = Number.MAX_SAFE_INTEGER;

  for (let num of nums) {
    if (num < numOne) {
      numOne = num;
    }
    if (num > numOne) {
      numTwo = Math.min(num, numTwo);
    }
    if (num > numTwo) {
      return true;
    }
  }
  return false;
}

let nums = [0, 4, 2, 1, 0, -1, -3];
console.log(increasingTriplet(nums));
