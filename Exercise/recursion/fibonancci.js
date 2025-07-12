function fibonancci(n) {
  if (n <= 1) return n;

  return fibonancci(n - 1) + fibonancci(n - 2);
}

let n = 1;
console.log(fibonancci(n));
