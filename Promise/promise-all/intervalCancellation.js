// Question ?
//  Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

function cancellable(fn, args, t) {
const result = fn(...args);
  let intervalId  = setInterval(() => {
    fn(...args);
  }, t);

  return () => {
    clearInterval(intervalId);
    console.log("Interval cancelled");
  };
}

function fn(x) {
  return x * 2;
}
let arg = [1];
const cancelTimeMs = 190;

const cancelFn = cancellable(fn, arg, 2);

// Schedule cancelFn to be invoked after cancelTimeMs
setTimeout(cancelFn, cancelTimeMs);