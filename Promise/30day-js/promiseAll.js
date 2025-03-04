var promiseAll = function (functions) {
  return Promise.all(functions.map((fun) => fun()));
};


const promise = promiseAll([
    () => new Promise((res) => setTimeout(() => res(10), 1000)),
    () => new Promise((res) => setTimeout(() => res(20), 500)),
    () => new Promise((res) => setTimeout(() => res(30), 1500))
]);

promise.then(console.log); 