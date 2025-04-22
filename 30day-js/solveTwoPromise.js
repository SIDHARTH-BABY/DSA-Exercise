var addTwoPromises = async function (promise1, promise2) {
  // Await both promises to resolve
  const [num1, num2] = await Promise.all([promise1, promise2]);
  // Return the sum as a promise
  return num1 + num2;
};

addTwoPromises(
  new Promise((res, rej) => res(2)),
  new Promise((res, rej) => res(5))
).then((val) => console.log(val));
