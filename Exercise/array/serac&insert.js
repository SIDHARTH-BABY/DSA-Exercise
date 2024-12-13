function SearchInsert(nums, tar) {
  let left = 0;
  let right = nums.length - 1;
  if (tar < nums[left]) return 0;
  if (tar > nums[right]) return nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === tar) return mid;
    if (nums[mid] > target) right = mid - 1;
    else   left = mid + 1;
  }
  return left;
}

const nums = [1, 3, 6];
const target = 5;
console.log(SearchInsert(nums, target));
