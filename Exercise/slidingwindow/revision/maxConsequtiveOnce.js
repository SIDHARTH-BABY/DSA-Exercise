function longestOnes(nums, k) {
  let count = 0;
  let left = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    }
    while (count > k) {
      if (nums[left] === 0) {
        count--;
      }
      left++;
    }
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}

let nums = [1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
console.log(longestOnes(nums, k));
