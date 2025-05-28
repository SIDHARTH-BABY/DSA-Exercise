function tracker() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}

let counter = tracker();
console.log(counter());
console.log(counter());
console.log(counter());
