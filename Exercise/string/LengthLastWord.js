function LengthLastWord(word) {
  let newWord = word.split(" ");
  console.log(newWord);
  for (let i = newWord.length - 1; i >= 0; i--) {
    console.log(newWord[i],'mmm');
    if (newWord[i] != "") {
        console.log(newWord[i],'yy');
      return newWord[i].length;
    }
  }
}

const s = "agjgjg "
console.log(LengthLastWord(s));
