function lengthOfLastWord(words) {
  let n = words.length - 1;

  while (n >= 0) {
    if (words[n] === " ") {
      n--;
    } else {
      break;
    }
  }
  let count = 0;
  while (n >= 0) {
    if (words[n] != " ") {
      n--;
      count++;
    } else {
  return count;
    }
  }
}

let input = "Hello Worlddd";s
console.log(lengthOfLastWord(input));
