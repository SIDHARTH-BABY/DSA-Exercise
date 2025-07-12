function getDrome(left, right, s) {
  while (left >= 0 && right < s.length) {
    if (s[left] != s[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}

function palindromrSubstring(s) {
  let max = [0, 1];
  for (let i = 0; i < s.length; i++) {
    let even = getDrome(i - 1, i, s);
    let odd = getDrome(i - 1, i + 1, s);
    let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax;
  }
  return s.slice(max[0], max[1]);
}
