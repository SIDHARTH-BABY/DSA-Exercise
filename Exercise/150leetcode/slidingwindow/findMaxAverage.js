function findMaxAverage(nums, k) {
  let max = -Infinity;
  let windowStart = 0;
  let soFar = 0;
  for (let windowEnd = 0; windowEnd <= nums.length - 1; windowEnd++) {
    soFar += nums[windowEnd];
    if (windowEnd - windowStart === k - 1) {
      let avg = soFar / k;
      max = Math.max(max, avg);
      soFar -= nums[windowStart];
      windowStart++;
    }
  }
  return max;
}

let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(findMaxAverage(nums, k));
