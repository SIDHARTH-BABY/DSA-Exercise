function TwoSum(nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in obj) {
      console.log(obj);

      return [obj[diff], i];
    } else {
      obj[nums[i]] = i;
    }
  }
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(TwoSum(nums, target));
