// function factorial(num, res, track) {
//   res = track * res;
//   track++;
//   if (track === num + 1) {
//     return res;
//   }
//   return factorial(num, res, track);
// }

// const num = 5;

console.log(factorial(num, 1, 1));


// better approach with less space complexity

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}