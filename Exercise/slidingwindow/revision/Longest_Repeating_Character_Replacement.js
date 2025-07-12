function characterReplacement(nums, k) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < nums.lenght; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    
  }
}

let k = 2;
let s = "ABAB";
console.log(characterReplacement(s, k));
