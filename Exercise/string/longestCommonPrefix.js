function longestCommonPrefix(str) {
  let i = 0;
  while (i < str[0].length) {
    for (let j = 1; j < str.length; j++) {
      if (str[0][i] != str[j][i] || str[j].length === i) {
        return str[0].substring(0, i);
      }
    }
    i++;
  }
  return str[0].substring(0, str[0].length);
}

let str = ["aa", "aa"];
console.log(longestCommonPrefix(str));

// check substring(0,5)
