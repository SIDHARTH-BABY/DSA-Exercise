var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = temp;
      lastNonZeroFoundAt++;
    }
  }
  return nums;
};

let val = [0, 1, 0, 0, 3, 12];
console.log(moveZeroes(val));













