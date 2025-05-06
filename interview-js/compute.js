function computeMoney() {
  let res = 0;
  return {
    lacs(val) {
      res += val * 100000;
      return this;
    },
    thousand(val) {
      res += val * 1000;
      return this;
    },
    value() {
      return res;
    },
  };
}
console.log(computeMoney().lacs(10).thousand(20).value());
