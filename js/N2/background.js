const buttons = document.getElementsByClassName("c-btn");
const bgContainer = document.getElementById("bg-container");

for (let btn of buttons) {
  btn.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      case "red":
        bgContainer.style.backgroundColor = "rgb(252 165 165)";
        break;
      case "green":
        bgContainer.style.backgroundColor = "rgb(134 239 172)";
        break;
      case "blue":
        bgContainer.style.backgroundColor = "rgb(147 197 253)";
        break;
      default:
        bgContainer.style.backgroundColor = "rgb(243 244 246)";
        break;
    }
  });
}
