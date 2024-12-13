function kidsWithCandies(val, extra) {

  let highVal = Math.max(...val);
  let first = 0;
  while (first < val.length) {
    console.log(val[first]);

    let sum = val[first] + extra;
    let high = highVal;
    if (val[first] === highVal) {
      val[first] = true;
    }
    if (sum >= high) {
      val[first] = true;
    } else {
      val[first] = false;
    }
    first++;
  }
  return val;
}

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
