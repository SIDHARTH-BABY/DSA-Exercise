function OurDebounce(printResult, delay) {
  let timeoutId;
  return function (val) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
       printResult(val);
    }, delay);
  };
}

const printResult = (val) => {
  console.log(val);
};
const delay = 1000;
const myValDebounce = OurDebounce(printResult, delay);

myValDebounce("s")
myValDebounce("si")
myValDebounce("sid")
myValDebounce("sidh")
