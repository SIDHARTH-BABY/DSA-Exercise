function maxProfit(val) {
  let firstVal = val[0];
  let maxProfit = 0;

  for (let i = 1; i < val.length; i++) {
    if (firstVal > val[i]) {
      firstVal = val[i];
    } else {
      maxProfit = Math.max(maxProfit, val[i] - firstVal);
    }
  }
  return maxProfit;
}

const arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));
