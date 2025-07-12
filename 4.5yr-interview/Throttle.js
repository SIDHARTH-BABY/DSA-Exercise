function Throttle(printFun, delay) {
  let lastTime = 0;
  return function (val) {
    let currentTime = Date.now();
    if (currentTime - lastTime >= delay) {
      printFun(val);
      lastTime = currentTime;
    }
  };
}

const PrintFun = (val) => {
  console.log(val);
};

const delay = 3000;
const myThrottle = Throttle(PrintFun, delay);

setTimeout(() => myThrottle("sidh"), 3100); // Will log after 3.1 seconds
setTimeout(() => myThrottle("sidhu"), 3200); // Blocked (within 3s of last log)
setTimeout(() => myThrottle("done"), 6300); // Will log (after 3s again)
