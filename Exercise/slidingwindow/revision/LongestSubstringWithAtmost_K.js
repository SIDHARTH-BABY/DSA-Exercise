function LongestSubstring(nums, k) {
  let left = 0;
  let maxLeng = 0;

  let map = new Map();

  for (let right = 0; right < nums.length; right++) {
    if (map.has(nums[right])) {
      map.set(nums[right], map.get(nums[right]) + 1);
    } else {
      map.set(nums[right], 1);
    }
    while (map.size > k) {
      map.set(nums[left], map.get(nums[left]) - 1);
      if (map.get(nums[left]) === 0) {
        map.delete(nums[left]);
      }
      left++;
    }
    maxLeng = Math.max(maxLeng, right - left + 1);
  }
  return maxLeng;
}

const s = "aaabbrrwwwssddddd";
const k = 2;
console.log(LongestSubstring(s, k));
