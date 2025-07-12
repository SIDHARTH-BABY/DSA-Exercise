const hello = new Promise((res, rej) => {
  document.getElementById("btn1").addEventListener("click", () => {
    res("btn clicks");
  });
});

hello.then((val) => console.log(val));
