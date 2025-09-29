function powerOfTwo(power) {
  if (power === 1) {
    return true;
  }
  if (power < 1 || power % 2 != 0) {
    return false;
  }
  return powerOfTwo(power / 2);
}

let power = 17;
console.log(powerOfTwo(power));
