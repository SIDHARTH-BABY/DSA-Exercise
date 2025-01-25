function first(fn) {
  return function (...args) {
    let res = fn(...args);
    return res;
  };
}

function funCount(a, b, c) {
  return a + b + c;
}
let secFun = first(funCount);

console.log(secFun(1, 2, 3));
