var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let result = nums[0]+nums[1]+nums[2]
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1
        let end = nums.length - 1
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            if(sum === target){
                return sum
            }
            
            if (Math.abs(target-sum) < Math.abs(target-result) )  {
                result = sum
            }
            if (sum > target) {
                end--
            } else if (sum < target) {
                start++
            }
        }
    }
    return result
};

let nums=[-1,2,1,-4]
console.log(threeSumClosest(nums))