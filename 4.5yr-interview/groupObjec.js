const object = [
  {
    key: "sample 1",
    data: "data1",
  },
  {
    key: "sample 1",
    data: "data2",
  },
  {
    key: "sample 1",
    data: "data3",
  },
  {
    key: "sample 3",
    data: "data23",
  },
  {
    key: "sample 2",
    data: "data244",
  },
  {
    key: "sample 2",
    data: "data2234233",
  },
];

function groupObject(data) {
  let result = {};
  data.forEach((val) => {
    if (result[val.key]) {
      result[val.key].push(val);
    } else {
      result[val.key] = [val];
    }
  });
  return result;
}

console.log(groupObject(object));




  // const res = (...args) => {
  //   console.log(args);
  //   const key = args.join("_");
  //   if (map.has(key)) {
  //     console.log(map, "inside memoize");

  //     return map.get(key);
  //   }
  //   const result = val(...args);
  //   map.set(key, result);
  //   console.log(map, "no memoize");
  //   return result;
  // };

  // return res;


//   const add = (a, b) => {
//   console.log(a, b);
//   return a + b;
// };