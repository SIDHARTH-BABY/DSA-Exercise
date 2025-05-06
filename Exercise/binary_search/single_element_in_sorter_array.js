function singleElement(val) {
  let start = 0;
  let end = val.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end )/ 2);
    console.log(mid,'mid');
    if (mid % 2 === 1) mid--;
    console.log(mid,'val mid');
    
    if (val[mid] === val[mid + 1]) {
        start = mid + 2;
      } else {
        end = mid;
      }
  }
  return val[start];

}

let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(singleElement(nums));
