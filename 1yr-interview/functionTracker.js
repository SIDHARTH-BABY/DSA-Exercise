function tracker() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}


let counter = tracker();
console.log(counter());
console.log(counter());
console.log(counter());



// const obj ={'val':'dfd'}

// function object(obj){
// for (let key in obj){
//   console.log(key)
// }
// }

// object(obj)