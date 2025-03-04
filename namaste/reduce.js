// Q. find the age count in the given object
const users = [
  { name: "sidhart", age: 25 },
  { name: "ishan", age: 14 },
  { name: "nav", age: 25 },
];

// using for loop
// --------------------------------
// function withOutReduce() {
//   let res = {};
//   for (let i = 0; i < users.length; i++) {
//     if (res[users[i].age]) {
//       res[users[i].age] += 1;
//     } else {
//       res[users[i].age] = 1;
//     }
//   }
//   return res;
// }

// console.log(withOutReduce(users));

//  using reduce
let res = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(res);
