function longestSubarray(nums) {
  let curr = 0;
  let prev = 0;
  lz = -1;
  let len = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr++;
    } else {
      sum = prev + curr;
      let = Math.max(len, sum);
      prev = curr;
      curr = 0;
    }
    sum = prev + curr;
    len = Math.max(len, sum);
  }
  return len === nums.length ? len - 1 : len;
}

let nums = [1, 1, 0, 1];
console.log(longestSubarray(nums));
