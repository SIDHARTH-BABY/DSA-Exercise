function mergeSortArray(nums1, nums2, m, n) {
  let first = m - 1;
  let second = n - 1;
  let mid = m + n - 1;

  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];
    if (fVal > sVal) {
      nums1[mid] = fVal;
      mid--;
      first--;
    } else {
      nums1[mid] = sVal;
      mid--;
      second--;
    }
  }
  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

console.log(mergeSortArray(nums1, nums2, m, n));
