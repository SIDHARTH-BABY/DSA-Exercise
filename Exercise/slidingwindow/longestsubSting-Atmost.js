function longestSubstring(char, k) {
  let map = new Map();

  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < char.length; right++) {
    let val = char[right];
    map.set(val, (map.get(val) || 0) + 1);
    while (map.size > k) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);

      if (map.get(leftChar) === 0) {
        map.delete(leftChar);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

let s = "aaabwbvvvsdad";
let k = 3;
console.log(longestSubstring(s, k));
