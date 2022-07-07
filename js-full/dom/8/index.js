export function createButton(buttonText) {
  const element = document.querySelector("body");
  const button = document.createElement("button");
  button.textContent = buttonText;
  element.append(button);
  return buttonText;
}

createButton("Hello World");
