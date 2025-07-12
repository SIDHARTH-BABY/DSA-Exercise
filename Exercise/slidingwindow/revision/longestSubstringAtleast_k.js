function longestSubstring(str, k) {
  let map = new Map();
  let left = 0;
  let right = 0;
  let maxLen = 0;
  while (right < str.length) {
    map.set(str[right], (map.get(str[right]) || 0) + 1);
    while (map.size > k) {
      map.set(str[left], map.get(str[left]) - 1);
      if (map.get(str[left]) === 0) {
        map.delete(str[left]);
      }
      left++;
    }
    console.log(maxLen,'maxlen',map)
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return maxLen;
}

const s = "aaasdfasdfsabb";
const k = 3;
console.log(longestSubstring(s, k));

// function longestSubstring(nums, k) {
//   let left = 0;
//   let maxLeng = 0;

//   let map = new Map();

//   for (let right = 0; right < nums.length; right++) {
//     if (map.has(nums[right])) {
//       map.set(nums[right], map.get(nums[right]) + 1);
//     } else {
//       map.set(nums[right], 1);
//     }
//     while (map.size < k) {
//       map.set(nums[left], map.get(nums[left]) - 1);
//       if (map.get(nums[left]) === 0) {
//         map.delete(nums[left]);
//       }
//       left++;
//     }
//     maxLeng = Math.max(maxLeng, right - left + 1);
//   }
//   return maxLeng;
// }
