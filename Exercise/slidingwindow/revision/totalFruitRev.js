function totalFruit(nums) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    while (map.size > 2) {
      map.set(nums[left], map.get(nums[left]) - 1);
      if (map.get(nums[left]) === 0) {
        map.delete(nums[left]);
      }
      left++;
    }
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}

let nums = [2, 1, 3, 4, 4, 4];
console.log(totalFruit(nums));
