document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    console.log(name, "name");
    console.log(pass, "pass");
  });
});
