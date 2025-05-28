const maxFruits = (fruits) => {
  let left = 0;
  let right = 0;
  let res = [];
  let count = 0;
  while (right < fruits.length) {
    if (count > 2) {
      while (count > 2) {
        if (res.includes(fruits[left])) {
          left++;
          res.shift();
          count--;
        }
      }
    }
    if (res.includes(fruits[right])) {
      res.push(fruits[right]);
      right++;
    } else {
      count++;
      res.push(fruits[right]);
    }
  }
  return res
};

const fruits = [1, 2, 3, 2, 2];
console.log(maxFruits(fruits));
