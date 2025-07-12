function totalFruit(fruits) {
  let left = 0;
  let maxLen = 0;
  let map = new Map();
  for (let right = 0; right < fruits.length; right++) {
    if (map.has(fruits[right])) {
      map.set(fruits[right], map.get(fruits[right]) + 1);
    } else {
      map.set(fruits[right], 1);
    }
    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1);
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left]);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

let fruits = [1, 2, 3, 2, 2];
console.log(totalFruit(fruits));
