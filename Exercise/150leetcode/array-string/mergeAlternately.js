var mergeAlternately = function (word1, word2) {
  let startFirst = 0
  let startSec = 0
  let res =  []
console.log(word1.length - 1);

  while (startFirst <= word1.length - 1 || startSec <= word2.length-1) {
    res.push(word1[startFirst])
    res.push(word2[startSec])
    startFirst++
    startSec++    
  }
  return res.join('')
};

let word1 = "ab";
let word2 = "pqrs"
console.log(mergeAlternately(word1, word2));
