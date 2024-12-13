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
      count++;
    }
  }
  let total = item.length - count;
  return total;
}

const item = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(item, val));


///////////////////////////////////// below is the valid & both are correct


function removeElement(item, val) {
  let index = 0;
  for (let i = 0; i < item.length; i++) {
    if (item[i] != val) {
      item[index] = item[i];
      index++;
    }
  }

  return index;
}