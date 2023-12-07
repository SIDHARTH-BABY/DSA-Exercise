/// here is the  simplified  version

function checkPalindrome(nums) {
  if (nums < 0) {
    return false;
  }
  return nums === +nums.toString().split("").reverse().join("");
}

// here the + sign will convert it into a Number

const nums = 121;
console.log(checkPalindrome(nums));
