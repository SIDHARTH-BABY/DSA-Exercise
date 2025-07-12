function lengthOfLastWord(words) {
  let flag = false;
  let count = 0;
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] === " ") {
      flag = true;
      if (count > 0 && flag) {
        return count;
      }
    } else {
      count++;
    }
  }
  if(count){
    return count
  }
}

const s = " a ";
console.log(lengthOfLastWord(s));
