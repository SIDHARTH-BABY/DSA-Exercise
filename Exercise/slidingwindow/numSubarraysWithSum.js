function numSubarraysWithSum(nums, goal) {
  const prefixSums = new Map();
  prefixSums.set(0, 1); // Base case: sum 0 appears once

  let currSum = 0;
  let count = 0;

  for (let num of nums) {
    currSum += num;

    if (prefixSums.has(currSum - goal)) {
      console.log(currSum);

      count += prefixSums.get(currSum - goal);
    }
      console.log(currSum,'out',count,'prefix');

    prefixSums.set(currSum, (prefixSums.get(currSum) || 0) + 1);
  }

  return count;
}

const nums = [1, 0, 1, 0, 1];
const goal = 2;
console.log(numSubarraysWithSum(nums, goal));
