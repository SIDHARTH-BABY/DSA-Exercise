function asteroidCollision(nums) {
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      stack.push(nums[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(nums[i])) {
        stack.pop();
      }
      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(nums[i]);
      } else if (stack[stack.length - 1] === Math.abs(nums[i])) {
        stack.pop();
      }
    }
  }
  return stack;
}

let num = [5,-6, 5, -3, 1, -1];
console.log(asteroidCollision(num)); // Output: []


//positive value alway push to the stack
//negative value greater than postive values in stack then we will pop
//if there is no items in the stack or only negative values in the stack we will directly push the negative num to the stack
// same value with positinve and negative will pop out from stack
