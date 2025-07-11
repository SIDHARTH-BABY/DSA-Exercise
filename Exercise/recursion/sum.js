function sumRecursion(num) {
  if (num === 0) return num
  return num + sumRecursion(num - 1);
}

const num =3
let sum = 0;
console.log(sumRecursion(num));
