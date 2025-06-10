// let numbers = [1, 2, 3];
// let result = numbers.forEach((num) => {
//   return num * 2;
// });
// console.log(numbers);


// | | | | | | | | | | | 
//   |
function callingThrottle(print, delay) {
  let lastCall = 0;
  return function throttle(...args) {
    let now = Date.now()
    if (now - lastCall >= delay) {
              lastCall = now

      print(...args);
    }
  };
}

const print = (args) => {
  console.log(args);
};

const delay = 3000;
const throttle = callingThrottle(print, delay);

// Simulate rapid calls
throttle("s");               // Will log immediately
throttle("si");              // Blocked (too soon)
throttle("sid");             // Blocked (too soon)

setTimeout(() => throttle("sidh"), 3100); // Will log after 3.1 seconds
setTimeout(() => throttle("sidhu"), 3200); // Blocked (within 3s of last log)
setTimeout(() => throttle("done"), 6300);  // Will log (after 3s again)