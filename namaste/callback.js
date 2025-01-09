function firstFunc(func) {
  func();
}

function secFunc() {
  console.log("helo");
}

firstFunc(secFunc);

////////////////////////////////

//here it wont wait for hte settimeout to finish , instead it will be stored in a seperate space and move on
//so first the sid & y will be added to the callstack then executed then go out of the call stack , then after 2 sec only the timeout will go inside the callstack and execute
setTimeout(() => {
  console.log("sid");
}, 2000);

function sid(sec) {
  console.log("first");
  sec();
}
sid(function y() {
  console.log("sec");
});

/////////

//here the funcitn sec is a callback function
document.getElementById("btn1").addEventListener("click", function sec() {
  console.log("hello");
});

////////
