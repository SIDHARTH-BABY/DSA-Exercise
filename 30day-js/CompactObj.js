var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    let res = [];
    for (let elements of obj) {
      if (elements) {
        if (typeof elements === "object" || Array.isArray(elements)) {
          res.push(compactObject(elements));
        } else {
          res.push(elements);
        }
      }
    }
    return res;
  } else {
    let res = {};
    for (let key in obj) {
      if (obj[key]) {
        if (typeof obj[key] === "object" || Array.isArray(obj[key])) {
          res[key] = compactObject(obj[key]);
        } else {
          res[key] = obj[key];
        }
      }
    }
    return res;
  }
};

let obj = (bj = { a: null, b: [false, 1] });
console.log(compactObject(obj));
