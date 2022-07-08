const inputElem = document.querySelector(".text-input");

const changeFunc = () => console.log(inputElem.value);

inputElem.addEventListener("change", changeFunc);
