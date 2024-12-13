function findProduct(val) {
  let newVal =val.filter((val) => val != 0);
  console.log(newVal,'val');
}

let val = [-1, 1, 0, -3, 3];
console.log(findProduct(val));
