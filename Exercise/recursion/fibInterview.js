function fibSeries(n) {
  if (n <= 1) {
    return n;
  }
  return fibSeries(n - 1) + fibSeries(n - 2);
}

console.log(fibSeries(7));

// 1,1,2,3,5,8,13
