function reverseString(val) {
  for (let i = 0, j = val.length - 1; i < val.length / 2; i++, j--) {
    let temp = val[i];
    val[i] = val[j];
    val[j] = temp;
  }
  return val;
}

let val = ["h", "e", "l", "l", "o"];
console.log(reverseString(val));
