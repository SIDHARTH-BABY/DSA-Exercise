function isObjectEmpty(obj) {
  if (Array.isArray(obj)) {
    if (obj.length <= 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (Object.keys(obj).length <= 0) {
      return true;
    } else {
      return false;
    }
  }
}

let obj = {  };
console.log(isObjectEmpty(obj));
