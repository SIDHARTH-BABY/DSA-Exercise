function fib(n) {
  if (n <= 1) return n;
console.log(n-1,n-2);
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));



//fibonacci series means , [0,1,1,2,3,5,8,13....], the last two number sum will be the next number, 
//above question is , if we input a index , it should return the val in the fibonacci series .