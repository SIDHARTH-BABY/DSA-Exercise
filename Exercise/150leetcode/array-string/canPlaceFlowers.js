function canPlaceFlowers(flowerbed, n) {
  if (flowerbed.length <= 1) {
    return false;
  }
  let start = 0;
    if(n === 0){
        return true
    }
  if ((flowerbed.length <= 1)) {
    if(flowerbed[start] === 0){
        return true
    }
    if(n === 0){
        return true
    }
    return false
  }
  while (start < flowerbed.length) {
    if (
      flowerbed[start] === 0 &&
      (flowerbed[start - 1] === 0 || start === 0) &&
      (flowerbed[start + 1] === 0 || start === flowerbed.length - 1)
    ) {
      console.log(flowerbed[start], "o");
      flowerbed[start] = 1
      start += 2;
      n--;
    }else{
        start+=2
    }
    if (n === 0) {
      return true;
    }
  }
  return n<=0;
}

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n));
