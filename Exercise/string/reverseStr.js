function reverseStr(val) {
  let str = val.split("");
  for (let i = 0; i < str.length / 2; i++) {
    let temp = str[i];
    str[i] = str[str.length - i - 1];
    str[str.length - i - 1] = temp;
  }
  return str;
}

let str = "abcdef";

console.log(reverseStr(str));
