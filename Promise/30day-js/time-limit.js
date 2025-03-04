function timeLimit(fn, t) {
  return async function (...args) {
    //here whatever we pass in the secFun it will be visible in this ...args
    return new Promise(async (resolve, reject) => {
      let id = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      try {
        const res = await fn(...args);
        clearTimeout(id); // Clear timeout if function resolves in time
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  };
}

function fn(ts) {
  console.log(ts, "here is the val");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("resolved before Time Limit Exceeded"); // Resolves after `ts` milliseconds
    }, ts);
  });
}

let t = 2000;
let secFun = timeLimit(fn, t);
secFun(1000).then(console.log).catch(console.log); // Should print "Time Limit Exceeded" at 2s
