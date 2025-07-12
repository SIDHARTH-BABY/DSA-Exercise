// 395. Longest Substring with At Least K Repeating Characters
function longestSubstring(s, k) {
  if (s.length === 0 || k > s.length) return 0;
  if (k <= 1) return s.length;

  const freq = new Map();
  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) < k) {
      // Split at this index and check both sides
      const left = longestSubstring(s.substring(0, i), k);
      const right = longestSubstring(s.substring(i + 1), k);
      return Math.max(left, right);
    }
  }

  // All characters meet the k requirement
  return s.length;
}

let s = "aaabb";
let k = 3;
console.log(longestSubstring(s, k));
