function memoisedFun() {
  let obj = {};
  return function (...args) {
    let id = args.join("_");

    if (obj[id]) {
      console.log("valuse already there", obj);
      return obj[id];
    } else {
      let res = sum(...args);
      console.log(res);

      obj[id] = res;
      console.log("new value", obj);

      return res;
    }
  };
}

function sum(a, b) {
  return a + b;
}
let memoisedAdd = memoisedFun();
memoisedAdd(1, 2);
memoisedAdd(1, 3);
memoisedAdd(1, 2);
