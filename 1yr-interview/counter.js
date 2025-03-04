const count = ((val) => {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };

  const reset = () => {
    prevCount = 0;
    return prevCount;
  };

  // const count = (val) => {
  //   prevCount = prevCount + val;
  //   return prevCount;
  // };
  return {
    reset,
  };
})();

let countFun = count();

console.log(count());
console.log(count());
console.log(countFun.reset());
console.log(count());
console.log(count());
