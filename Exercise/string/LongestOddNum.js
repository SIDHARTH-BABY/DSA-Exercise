function largestOddNumber(num) {
  let arrNum = num.split("");
  console.log(arrNum);
  let left = 0;
  let right = arrNum.length;
  let res = [];
  let tempRes = [];
  while (left < right) {
    if (Number(arrNum[left]) % 2 === 1) {
      res.push(...tempRes, arrNum[left]);
      tempRes = [];
    } else {
      tempRes.push(arrNum[left]);
    }
    left++;
  }

  return res.join("");
}
function largestOddNumber(num) {
  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    if (Number(num[right]) % 2 === 1) {
      return num.substring(0, right + 1);
    } 
    right--;
  }

}

let num = "2043321819";
console.log(largestOddNumber(num));
