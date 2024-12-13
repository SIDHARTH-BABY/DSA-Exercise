document.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  let square = document.createElement("div");
  square.classList.add("square-class");
  square.style.top = y + "px"
  square.style.left = x + "px"
  square.style.width = "100px";
  square.style.height = "100px";
  document.body.appendChild(square)
});
