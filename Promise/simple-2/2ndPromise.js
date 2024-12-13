const myPromise = new Promise((res, rej) => {
  document.getElementById("success").addEventListener("click", () => {
    res("success");
  });
  document.getElementById("fail").addEventListener("click", () => {
    rej("fail");
  });
});

async function myFunc() {
  let res = await myPromise;
  return "sidhu";
}

const func = await myFunc();

console.log(func);

//use my promise and make this in pending state
//  return await myPromise -- > this will make this pending

//here in the myFunc , you will get an error, because , we are using await outside the async function .but we can solv this error by making this file to module in the index.html