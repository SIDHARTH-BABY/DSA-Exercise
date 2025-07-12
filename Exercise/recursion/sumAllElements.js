function sumAllElements(nums, sum, track) {
  sum = nums[track] + sum;
  track++;
  if (track === nums.length) return sum;
  return sumAllElements(nums, sum, track);
}

let nums = [2, 5, 6, 3, 4, 7];
let sum = 0;
let track = 0;
console.log(sumAllElements(nums, sum, track));
