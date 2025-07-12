function findPrefix(str) {
  let newItem = [];
  let newStr = str[0].split("");
  if (str.length === 1) {
    if (newStr.length === 1) {
      return newStr.join("");
    }
  }
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (newStr[i] === str[j][i]) {
       
        if (j === str.length - 1) {
          newItem.push(newStr[i]);
        }
      } else {
        return newItem.join("");
      }
    }
  }
  return newItem.join("");
}

let str = ["flower", "flow", "fslight"];

console.log(findPrefix(str));
