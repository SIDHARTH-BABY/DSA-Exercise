function first() {
  var a = 10;
  function sec() {
    console.log(a);
  }
  return sec;
}

let x = first();

console.log(x);
x();

//sec

function first() {
  let a = 10;
  function sec() {
    console.log(a);
  }
  a = 100;
  return sec;
}

let y = first();

y();
//here is the value will be 100 , because it always refer to the reference to a variable .

//third
