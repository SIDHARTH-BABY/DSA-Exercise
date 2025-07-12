// 1004. Max Consecutive Ones III

function maxConsecutiveOnes(nums, k) {
  let maxLen = 0;
  let track = 0;
  let len = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      track++;
    }
    if (track > k) {
      if (nums[left] === 0) {
        track--;
      }
      left++;
    }
    if (track <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
  }
  return maxLen;
}

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1];
let k = 2;
console.log(maxConsecutiveOnes(nums, k));
