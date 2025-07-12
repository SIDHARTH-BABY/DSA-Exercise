function balancedStringSplit(str) {
  let right = 0;
  let count = 0;
  let leftCount = 0;
  let rightCount = 0;
  while (right <= str.length - 1) {
    if (str[right] === "R") {
      rightCount++;
    } else {
      leftCount++;
    }
    if (leftCount === rightCount) {
      count++;
    }
    right++;
  }

  return count;
}

const str = "RLRRRLLRLL";
console.log(balancedStringSplit(str));
