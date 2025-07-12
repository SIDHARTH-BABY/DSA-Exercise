function reverseStr(str, k) {
  let arr = str.split("");
  for (let i = 0; i < arr.length;i =i+(2*k)) {
    let mid = Math.floor(k / 2);

    for (let j = 0; j < mid; j++) {
      let temp = arr[i + j];
      arr[i + j] = arr[i + k - 1 - j];
      arr[i + k - 1 - j] = temp;
    }

  }
  return arr.join('');
}

let str = "abcdefg";
let k = 2;
console.log(reverseStr(str, k));
