function longestSubstring(nums, k) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    while (map.size > k) {
      map.set(nums[left], map.get(nums[left]) - 1);
      if (map.get(nums[left]) === 0) {
        map.delete(nums[left]);
      }
      left++;
    }
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen
}

let nums = ["a", "b", "b", "u", "u", "e", "y"];
let k = 3;
console.log(longestSubstring(nums, k));
