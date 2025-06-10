function computeAmt() {
  let val = 0;

  function lacs(nums) {
    val += nums * 100000;
    return this;
  }
  function crore(nums) {
    val += nums * 10000000;
    return this;
  }
  function thousand(nums) {
    val += nums * 1000;
    return this;
  }
  function value() {
    return val;
  }
  return {
    value,
    lacs,
    crore,
    thousand,
  };
}

console.log(computeAmt().lacs(15).crore(1).thousand(1).value());
