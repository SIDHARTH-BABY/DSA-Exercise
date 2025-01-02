function maxOperations(nums, k) {
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length-1;
  let count = 0;
  console.log(end);
  
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === k) {
      count++;
      start++;
      end--;
    } else if (sum < k) {
      start++;
    } else {
      end--;
    }
  }
  return count;
}

let nums = [3,1,3,4,3];
let k = 6;
console.log(maxOperations(nums, k));
