document.addEventListener("click", (e) => {
  let totalCircles = document.querySelectorAll(".circle-css");
  if (totalCircles.length === 2) {
    totalCircles.forEach((element) => {
      document.body.removeChild(element);
    });
  }
  let x = e.clientX;
  let y = e.clientY;

  console.log(x, y);

  let radius = "100px";
  const circle = document.createElement("div");
  circle.classList.add("circle-css");
  circle.style.top = y - 50 + "px";
  circle.style.left = x - 50 + "px";
  circle.style.width = radius 
  circle.style.height = radius 
  document.body.appendChild(circle);
});
