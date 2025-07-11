function removeElement(item, val) {
  let lastcount = 0;
  let count = 0;
  for (let i = 0; i < item.length; i++) {
    if (item[i] != val) {
      let temp = item[i];
      item[i] = item[lastcount];
      item[lastcount] = temp;
      lastcount++;
    } else {
      item[i] = "_";
      count++;
    }
  }
  let total = item.length - count;
  return total;
}


const nums = [0,1,2,2,3,0,4,2] 
const val = 2

console.log(removeElement(nums,val));
