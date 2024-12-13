var divStrings = function (str1, str2) {
  let startFirst = 0;
  let startSec = 0;
  let arr =[]
  while (startFirst <= str1.length - 1) {
    if (str1[startFirst] != str2[startSec]) {
      arr.push(str1[startFirst])
      startFirst++;
      startSec = 0;
    }
    if (str1[startFirst] === str2[startSec]) {
      
      startFirst++;
      startSec++;
      
    }
  }
};

let str1 = "ABCABC";
let str2 = "ABC";
console.log(divStrings(str1, str2));
