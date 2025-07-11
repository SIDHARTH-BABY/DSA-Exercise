function maxSubstring(s) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    while (map.has(s[i])) {
      map.delete(s[left]);
      left++;
    }
    map.set(s[i]);

    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}

let s = "abcabcbb";
console.log(maxSubstring(s));
