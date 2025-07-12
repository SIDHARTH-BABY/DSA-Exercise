function numberOfSubstrings(char) {
  let obj = { a: -1, b: -1, c: -1 };
  let count = 0;
  for (let i = 0; i < char.length; i++) {
    obj[char[i]] = i;

    if (obj["a"] != -1 && obj["b"] != -1 && obj["c"] != -1) {
      count = count + Math.min(obj["a"], obj["b"], obj["c"]) + 1;
      console.log(count, obj);
    }
  }
  return count;
}

let s = "abcabc";
console.log(numberOfSubstrings(s));
