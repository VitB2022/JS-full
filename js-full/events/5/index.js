const button = document.querySelector(".search__btn");
const inputElem = document.querySelector(".search__input");

const readText = () => console.log(inputElem.value);

button.addEventListener("click", readText);
