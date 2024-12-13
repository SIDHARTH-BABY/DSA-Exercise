function binarySearch(vals, tar) {
  let left = 0;
  let right = vals.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (vals[mid] === tar) {
      return mid;
    } else if (vals[mid] > tar) {
      right = mid - 1;
    } else if (vals[mid] < tar) {
      left = mid + 1;
    }
  }
  return -1
}

const vals = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(binarySearch(vals, target));
