function joinArr(arr1, arr2) {
  res = {};
  for (let i = 0; i < arr1.length; i++) {
    res[arr1[i].id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (res[arr2[i].id]) {
      for (const key in arr2[i]) {
        res[arr2[i].id][key] = arr2[i][key];
      }
    } else {
      res[arr2[i].id] = arr2[i];
    }
  }
  return Object.values(res);
}

let arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
let arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

for(const key in arr1){
    console.log(key,arr1[key]);
    
}
let user = { name: "John", age: 30, city: "New York" };

for (let key in user) {
  console.log(key, user[key]);
}
// console.log(joinArr(arr1, arr2));
