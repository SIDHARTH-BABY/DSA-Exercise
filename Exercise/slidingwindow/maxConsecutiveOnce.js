function maxConsecutive(nums, k) {
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentLength = 0;
    let count = 0;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 1) {
        currentLength++;
      } else {
        if (count < k) {
          count++;
          currentLength++;
        } else {
          break; // We've already flipped k zeros
        }
      }
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}


const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

console.log(maxConsecutive(nums, k));

// qst
// we can give k=2 , so 2 digits can change to '1' , then return the max length of consecutive onece in the array.

// bruteforce approach
// starting 0 length , we need move the 2nd loop through each digit , whenever we get a '0', we will decrease the count of k , once it become less than 'k' ,
//  then we will pass hte lengthe to the maxLength output . and move first loop to that digit
