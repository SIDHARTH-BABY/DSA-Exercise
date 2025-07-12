function isPowerOfTwo(n) {
  if (n === 1) return true;      // base case
  if (n < 1 || n % 2 !== 0) return false; // invalid case
  return isPowerOfTwo(n / 2);    // keep dividing
}

let n = 16;
console.log(isPowerOfTwo(n));

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.
