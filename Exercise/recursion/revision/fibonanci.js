function fib(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

let val = 2;
console.log(fib(val));

// 0 , 1 , 1, 2 , 3 ,4

// (n-1) + (n-2)
