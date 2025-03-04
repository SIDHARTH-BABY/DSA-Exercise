function removeStar(val) {
  let stack = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i] === "*") {
      stack.pop();
    } else {
      stack.push(val[i]);
    }
  }
  return stack.join('');
}

let s = "leet**cod*e";

console.log(removeStar(s));
