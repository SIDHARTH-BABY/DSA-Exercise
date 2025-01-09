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




//Q . build a button . clicking on that button increases the count by click
// we can do this by closure , here the sec is lexically inside the attachEvent function
function attachEvent() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function sec() {
    console.log("hello", count++);
  });

}

attachEvent()