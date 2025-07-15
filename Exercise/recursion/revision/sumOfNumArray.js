function sumArrayNum(n) {
  if(n===0){
    return arr[n]
  }

  return arr[n] + sumArrayNum(n - 1);
}

let arr = [2, 3, 4];
console.log(sumArrayNum(arr.length-1));
