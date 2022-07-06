export function setTitle(text) {
  const element = document.querySelector(".title");
  element.textContent = text;
  return text;
}

setTitle("Some new text");
