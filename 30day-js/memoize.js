function memoize(fn) {
    let obj = {};        // Cache to store results
    let count = 0;       // Count of actual function calls
  
    return function (...args) {
      let id = JSON.stringify(args); // Create unique cache key
  
      // Check if result is already cached
      if (obj.hasOwnProperty(id)) {
        return obj[id];  // Return cached result without incrementing count
      } else {
        // If not cached, call the function and store the result
        obj[id] = fn(...args);
        count++;  // Increment the actual call count
      }
  
      return obj[id];  // Return the result (either cached or newly computed)
    };
  }
  

const sum = (a, b) => a + b;

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

let fnName = "sum";
let actions = ["call", "call", "getCallCount", "call", "getCallCount"];

let values = [[2, 2], [2, 2], [], [1, 2], []];

const solveMemoization = memoize(sum);

console.log(solveMemoization(2, 2));
console.log(solveMemoization(2, 2));
console.log(solveMemoization(2, 2));
console.log(solveMemoization(3, 2));
