const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn:nth-child(2)");
const handleClick = (event) => {
  console.log(event.target.textContent);
};

btn.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick);
