var createCounter = function (n) {
  // Preserve the initial value of n
  console.log(n, "outer");

  const initialValue = n;

  return function (m) {
    console.log(m, "inner");

    // Return the incremented value of n
    return n++;
  };
};

// Example usage:
const counter = createCounter(10);
console.log(counter(1)); // Output: 10, then increment n to 11
console.log(counter(2)); // Output: 11, then increment n to 12
console.log(counter(3)); // Output: 12, then increment n to 13
