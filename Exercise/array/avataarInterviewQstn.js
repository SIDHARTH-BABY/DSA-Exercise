function jumpTwo(nums) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    console.log(nums[i],'value');

    if (i === currentEnd) {
      console.log(currentEnd, "currnent end", i);
      jumps++;
      currentEnd = farthest;
      console.log(jumps, "jump", currentEnd, "currnent end second");
    }
  }

  return jumps;
}

let nums = [2, 1, 2, 3, 1];

console.log(jumpTwo(nums));

let map = { 0: 2 };
