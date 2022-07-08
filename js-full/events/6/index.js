const btn = document.querySelector(".single-use-btn");
const callFunc = () => {
  console.log("clicked");
  btn.removeEventListener("click", callFunc);
};

btn.addEventListener("click", callFunc);
