export function finishForm() {
  const form = document.querySelector(".login-form");
  const inputElem = document.createElement("input");
  inputElem.setAttribute("type", "text");
  inputElem.setAttribute("name", "login");
  form.prepend(inputElem);
  let elemPaasw = document.querySelector("input:nth-child(2)");
  elemPaasw.setAttribute("type", "password");
  return form;
}
