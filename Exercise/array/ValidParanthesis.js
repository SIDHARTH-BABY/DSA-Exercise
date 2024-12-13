var isValid = function (val) {
  let obj = { "{": "}", "[": "]", "(": ")" };
  let arr = [];
  for (let i = 0; i < val.length; i++) {
    if (obj[val[i]]) {
      arr.push(obj[val[i]]);
    } else {
      if (arr[arr.length - 1] === val[i]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
};

let val = ")(){}";
console.log(isValid(val));
