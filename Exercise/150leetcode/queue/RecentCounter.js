function RecentCounter() {
  let request = [];
  RecentCounter;
  return function (val) {
    request.push(val);
    request = request.filter((data) => data > val - 3000);
    return request.length
  };
}

const counter = RecentCounter();

console.log(counter(1));
console.log(counter(100));
console.log(counter(3001));
console.log(counter(3002));
