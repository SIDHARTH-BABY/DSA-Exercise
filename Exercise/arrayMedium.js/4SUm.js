var fourSum = function (nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let start = j + 1;
      let end = nums.length - 1;
      while (start < end) {
        console.log(result, "one");

        let sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[start], nums[end]]);
          start++;
          end--;
          while (start < end && nums[start] === nums[start - 1]) start++;
          while (start < end && nums[end] === nums[end + 1]) end--;
        }
        if (sum < target) {
          start++;
        }
        if (sum > target) {
          end--;
        }
      }
    }
  }
  return result;
};
const nums = [-2, -1, -1, 1, 1, 2, 2];

console.log(fourSum(nums, 0));
