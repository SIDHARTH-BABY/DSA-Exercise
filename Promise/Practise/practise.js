document.getElementById("btn1").addEventListener("click", () => {});

// const promise = new Promise((resolve, reject) => {
//   document.getElementById("btn1").addEventListener("click", () => {
//     setTimeout(() => {
//       resolve("sucesss sidharth");
//     }, 100);
//   });
//   document.getElementById("reject").addEventListener("click", () => {
//     setTimeout(() => {
//       reject("rejected promise");
//     }, 100);
//   });
// });

// promise.then((val) => console.log(val)).catch((err) => console.log(err));

const myFunc = async () => {
  setTimeout(() => {
    console.log("ressolve");
  }, 1000);
};
let val =  myFunc();
console.log(val);
