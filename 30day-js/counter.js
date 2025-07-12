var createCounter = function (init) {
  let val = init;
  const increment = () => {
    return ++val;
  };
  const decrement = () => {
    return --val;
  };
  const reset = () => {
    val = init;
    return init;
  };
  return {
    increment,
    decrement,
    reset,
  };
};

const counter = createCounter(2);

console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
