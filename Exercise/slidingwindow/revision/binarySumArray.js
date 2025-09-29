function numSubarraysWithSum(arr, goal) {
  let sum = 0;
  let count = 0;
  let left = 0;
  if (goal < 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > goal) {
      sum = sum - arr[left];
      left++;
    }
    count = count +( i - left + 1);
  }
  return count;
}

const nums = [1, 0, 1, 0, 1];
const goal = 2;
console.log(numSubarraysWithSum(nums, goal));
