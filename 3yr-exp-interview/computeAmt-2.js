function computeAmt() {
  let val = 0;
  return {
    lacs (nums) {
      val += nums * 100000;
      return this;
    },
    crore (nums) {
      val += nums * 10000000;
      return this;
    },
    thousand (nums) {
      val += nums * 1000;
      return this;
    },
    value () {
      return val;
    },
  };
}

console.log(computeAmt().lacs(15).crore(5).thousand(45).crore(7).value());
