var add = function (x) {
  let sum = x;
  function inner(y) {
    console.log(y);
    sum += y;
    return inner;
  }
  inner.valueOf = () => sum; // automatic conversion when coerced
  return inner;
};
console.log(+add(5)(5)(6));
