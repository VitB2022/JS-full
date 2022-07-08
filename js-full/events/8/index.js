const inputElem = document.querySelector(".text-input");

const changeFunc = (event) => console.log(event.target.value);

inputElem.addEventListener("change", changeFunc);
