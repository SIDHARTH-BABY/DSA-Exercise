function stringMatching(words) {
  words.sort((a, b) => a.length - b.length);
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j< words.length; j++) {
      if (words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      } 
    }
  }
  return result
}

let words = ["mass", "as", "hero", "superhero"];

console.log(stringMatching(words));
