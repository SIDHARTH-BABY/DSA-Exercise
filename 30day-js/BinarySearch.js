function Binary(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;
  while (start < end) {
    mid = Math.floor((end + start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(Binary(nums, target));
