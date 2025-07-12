function findWordsContaining(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      } else {
        continue;
      }
    }
  }
  return res;
}

let words = ["leet", "code", "cbc"];
let x = "e";
console.log(findWordsContaining(words, x));

// m - no of words
// n - max length of each word
// S - O(n*m)
// T - O(1)
