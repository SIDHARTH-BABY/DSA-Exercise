function pivotIndex(nums) {
  let left = 0;
  let right = 0;
  let pivot = 0;
  for (let i = pivot + 1; i < nums.length; i++) {
    console.log(nums[i], "and", right);

    right += nums[i];
  }
  for (let pivot = 0; pivot < nums.length; pivot++) {
    console.log(pivot, left,"sec", right);
    if (left === right) return pivot;
    left += nums[pivot];
    right -= nums[pivot + 1];
  }
  return -1;
}

let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
