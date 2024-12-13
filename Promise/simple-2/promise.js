const promise = new Promise((res, rej) => {
  document.getElementById("success").addEventListener("click", () => {
    res("success");
  });
  document.getElementById("fail").addEventListener("click", () => {
    rej("fail");
  });
});

// promise.then((res) => console.log(res)).catch((err) => console.log(err));
