function subset() {
  let slate = [];
  let res = [];

  function dfs(i, slate, nums) {
    // base case
    if (i === nums.length) {
      console.log("pushes");

      res.push(slate.slice());
      return;
    }
    //dfs exclude
    dfs(i + 1, slate, nums);
    slate.push(nums[i]);

    //dfs include
    dfs(i + 1, slate, nums);

    // backtracking
    slate.pop();
  }

  dfs(0, slate, nums);
  return res;
}

const nums = [1, 2, 3];

console.log(subset(nums));

// output : [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
