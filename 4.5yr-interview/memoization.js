const map = new Map();

function memoize(val) {
  const res = (...args) => {
    console.log(args);
    const key = args.join("_");
    if (map.has(key)) {
      console.log(map, "inside memoize");

      return map.get(key);
    }
    const result = val(...args);
    map.set(key, result);
    console.log(map, "no memoize");
    return result;
  };

  return res;
}

const add = (a, b) => {
  console.log(a, b);
  return a + b;
};

const val = memoize(add);
console.log(val(1, 2));
console.log(val(3, 4));
console.log(val(3, 4));
