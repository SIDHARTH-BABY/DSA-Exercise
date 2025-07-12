function LongestSubstring(s) {
  let resObj = new Map();
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    if (resObj.has(s[right])) {
      resObj.delete(s[left]);
      left++;
    }
    resObj.set(s[right]);
    let length = right - left + 1;
    max = Math.max(length, max);
  }
  return max
}

let s = "abcabcbb";
console.log(LongestSubstring(s));
