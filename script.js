console.log("hello");

const consoleBtn = document.getElementById("button");
const consoleBtnClick = () => {
  console.log("console", Math.random());
}

consoleBtn.addEventListener("click", consoleBtnClick);




console.log("Hello from console");

const lightBg = "rgb(236, 190, 197)";

const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function (){
  const currentBodyBg = window.getComputedStyle(body).background;

  if (currentBodyBg.includes(lightBg)) {
    body.style.background = "rgb(57, 53, 80)";
    body.style.color = "#FFF";

    themeButton.innerText = "☀️"
  } else {
    body.style.background = lightBg;
    body.style.color = "#000";

    themeButton.innerText = "🌑"
  }
})