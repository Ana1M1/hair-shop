console.log("hello");

const consoleBtn = document.getElementById("button");
const consoleBtnClick = () => {
  console.log("console", Math.random());
}

consoleBtn.addEventListener("click", consoleBtnClick);
