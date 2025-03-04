function arrayDiff(a, b) {
  let obj = {};
  let occNum = false;
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
      continue;
    } else {
      obj[a[i]] = 1;
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          console.log(a[i], b[j], "first");
          occNum = true;
          break;
        } else {
          console.log(a[i], b[j], "sec");
          occNum = false;
        }
      }
    }
    console.log(obj);
    if (!occNum) {
      res.push(a[i]);
    }
  }
  return res;
}
let a = [1, 2, 2];
let b = [1];
console.log(arrayDiff(a, b));
