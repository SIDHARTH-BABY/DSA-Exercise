function mergeAlternately(nums1, nums2) {
  let startFirst = 0;
  let startSec = 0;
  let res = [];
  while (startFirst <= nums1.length - 1 || startSec <= nums2.length - 1) {
    res.push(nums1[startFirst]);
    res.push(nums2[startSec]);
    startFirst++;
    startSec++;
  }
  return res.join('')
}

let nums1 = "qwe";
let nums2 = "tyuo";
console.log(mergeAlternately(nums1, nums2));
