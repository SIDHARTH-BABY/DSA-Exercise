function numJewelsInStones(jwels, stones) {
  let set = new Set();
  let count = 0;
  for (let i = 0; i < jwels.length; i++) {
    set.add(jwels[i])
  }

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      count++;
    }
  }
  return count;
}

const jwels = "ka";
const stones = "kaafadfkK";
console.log(numJewelsInStones(jwels, stones));


// if you want to findout a particular element from a string or an array . always use hashmap or Set.


// here space complecity = O(1)
// here time complecity = O(1)