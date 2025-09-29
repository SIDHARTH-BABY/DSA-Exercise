function removeElement(nums, val) {
  let first = 0;

  for(let i=0;i<nums.length;i++){
    console.log(first,'first',nums[first],'values',nums[i],'i')
    if(nums[i] != val){
      nums[first] = nums[i]
      first++
    }
  }
return nums
}

let nums = [3, 2, 3, 2, 3, 4, 2, 4, 3];
let val = 3;
console.log(removeElement(nums, val));
