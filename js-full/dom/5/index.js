export function setTitle(text) {
  const element = document.querySelector(".title");
  element.textContent = text;
  return element;
}

setTitle("Some new text");
