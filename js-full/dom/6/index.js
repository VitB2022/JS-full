function setButton(buttonText) {
  const element = document.querySelector("body");
  element.innerHTML = `<button>${buttonText}</button>`;
  return buttonText;
}

setButton("Hello");
