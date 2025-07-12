function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++
    }
    set.add(s[i]);

    maxLen = Math.max(i - left + 1, maxLen);
  }
  return maxLen
}

let s = "abcsabcbb";

console.log(lengthOfLongestSubstring(s));
