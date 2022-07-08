const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");

const logTarget = (text, color) => {
  const eventListItems = document.querySelector(".events-list");
  eventListItems.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "Span", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "Span", "grey");

divElem.addEventListener("click", logGreyDiv, true);
divElem.addEventListener("click", logGreenDiv);

pElem.addEventListener("click", logGreyP, true);
pElem.addEventListener("click", logGreenP);

spanElem.addEventListener("click", logGreySpan, true);
spanElem.addEventListener("click", logGreenSpan);

const buttonClear = document.querySelector(".clear-btn");

function handleClick() {
  document.querySelector(".events-list").innerHTML = "";
}

buttonClear.addEventListener("click", handleClick);

const buttonRemove = document.querySelector(".remove-handlers-btn");

function removeEventHandler() {
  divElem.removeEventListener("click", logGreyDiv, true);
  divElem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGreyP, true);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGreySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
}

buttonRemove.addEventListener("click", removeEventHandler);

const buttonAttach = document.querySelector(".attach-handlers-btn");

function attachEventHandler() {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
}

buttonAttach.addEventListener("click", attachEventHandler);
