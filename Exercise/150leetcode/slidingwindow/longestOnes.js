function longestOnes(nums, k) {
  let left = 0;
  let right = 0;
  let zero = 0;
  let length = 0;
  let maxLength = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zero++;
    }
    while (zero > k) {
      if (nums[left] === 0) {
        zero--;
        
      }
      left++;
    }
    if (zero <= k) {
      length = right - left + 1;
      maxLength = Math.max(length, maxLength);
    }
    right++
  }
  return maxLength;
}





let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
console.log(longestOnes(nums,k));