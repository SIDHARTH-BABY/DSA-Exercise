function resArray(arr) {
    let hasIncreasing = false;
    let hasDecreasing = false;
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        hasIncreasing = true;
      } else if (arr[i] > arr[i + 1]) {
        hasDecreasing = true;
      }
  
      // Early exit if both found
      if (hasIncreasing && hasDecreasing) {
        return "type 3";
      }
    }
  
    if (hasIncreasing) return "type 1";
    if (hasDecreasing) return "type 2";
  }
  


let arr =  [1, 3, 5, 7, 9, 10, 12, 60]
 
let arr1 = [65, 40, 20, 15, 10]
 
let arr2 = [1, 3, 5, 7, 9, 10, 20, 15, 8]

console.log(resArray(arr1));
