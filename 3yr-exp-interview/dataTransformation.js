//input
let obj = [
  { key: "sample 1", data: 5 },
  { key: "sample 1", data: 5 },
  { key: "sample 2", data: 51 },
  { key: "sample 2", data: 51 },
];

//output
//we need to get a output like this .
let output = {
  "sample 1": [
    { key: "sample 1", data: 5 },
    { key: "sample 1", data: 5 },
  ],
  "sample 2": [
    { key: "sample 2", data: 51 },
    { key: "sample 2", data: 51 },
  ],
};

function dataTrns(obj) {
  return obj.reduce((acc, curr) => {
    if (!acc[curr.key]) {
      acc[curr.key] = [];
    }
    acc[curr.key].push(curr);

    return acc;
  }, {});
}
console.log(dataTrns(obj));
