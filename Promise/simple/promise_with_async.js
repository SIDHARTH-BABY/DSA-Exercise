const mypromise = new Promise((res, rej) => {
  document
    .getElementById("btn-1")
    .addEventListener("click", () => res("Button Resolved 22"));
  document
    .getElementById("btn-2")
    .addEventListener("click", () => rej("Button Rejected"));
});

async function myPromiseAsync() {
    
    const sid = await mypromise
    return 'sid'
}


// let res = myPromiseAsync()

// console.log(res.then((res)=>console.log(res)));




// 2. now use await but dont create any funciton , use await here itself - if you want below code to work then make promise_with_async.js type to module index.html


const res2 = await myPromiseAsync()

console.log(res2);
