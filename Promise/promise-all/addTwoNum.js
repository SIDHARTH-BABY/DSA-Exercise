var addTwoPromises = async function (promise1, promise2) {
  return promise1.then((val) => promise2.then((val2) => val + val2));
};

let promise1 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 2000);
});
let promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(4), 1000);
});

// addTwoPromises(promise1, promise2).then((result) => {
//   console.log(result); // Output: 7
// });
Promise.all([promise1, promise2]).then((val) =>
  console.log(val[0]+val[1])
);

