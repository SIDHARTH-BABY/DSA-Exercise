const promise = new Promise((res, rej) => {
  document.getElementById("btn1").addEventListener("click", () => {
    res("btn clicked");
  });
});
// promise.then((res) => console.log(res).catch((val) => console.log(val)));

async function myFunction() {
    await promise
}


