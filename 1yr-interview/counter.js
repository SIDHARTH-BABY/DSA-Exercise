const counterModule = (() => {
  let currentCount = 0;

  const increment = (val) => {
    currentCount += val;
    return currentCount;
  };

  const reset = () => {
    currentCount = 0;
    return currentCount;
  };

  return {
    increment,
    reset,
  };
})();

// Usage:
console.log(counterModule.increment(1)); // 1
console.log(counterModule.increment(2)); // 2
console.log(counterModule.reset());     // 0
console.log(counterModule.increment(5)); // 5
console.log(counterModule.increment(3)); // 8
