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
  data.map((val) => {
    if (result[val.key]) {
      result[val.key].push(val);
    } else {
      result[val.key] = [val];
    }
  });
  return result;
}

console.log(groupObject(object));
