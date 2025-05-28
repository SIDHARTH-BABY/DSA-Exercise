var maxVowels = function (s, k) {
  let vovelSet = new Set(["a", "e", "i", "o", "u"]);
  let start = 0;
  let vowels = 0;
  let maxVowels = 0;

  for (let i = 0; i < s.length; i++) {
    if (i - start + 1 > k) {
      if (vovelSet.has(s[start])) vowels--;
      start++;
    }
    if (vovelSet.has(s[i])) {
      vowels++;
      maxVowels = Math.max(maxVowels, vowels);
    }
  }
  return maxVowels;
};

let s = "abcidaf";
let k = 3;
console.log(maxVowels(s, k));
