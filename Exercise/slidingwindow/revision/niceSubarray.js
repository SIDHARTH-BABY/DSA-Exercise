function niceSubarray(nums, k) {
  let map = new Map();
  let oddCount = 0;
  let count = 0;
  map.set(0, 1);
  for (let num of nums) {
    if (num % 2 === 1) {
      oddCount++;
    }
    if (map.has(oddCount - k)) {
      count += map.get(oddCount - k);
    }

    map.set(oddCount, (map.get(oddCount) || 0) + 1);
  }
  return count;
}

const nums = [1, 1, 2, 1, 1];
const k = 3;
console.log(niceSubarray(nums, k));
