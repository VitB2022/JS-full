export function getTitle() {
  const textContent = document.querySelector(".title");
  return textContent.textContent;
}

console.log(getTitle());

export function getDescription() {
  const innerText = document.querySelector(".about");
  return innerText.innerText;
}

console.log(getDescription());

export function getPlans() {
  const innerHtml = document.querySelector(".plans");
  return innerHtml.innerHTML;
}

console.log(getPlans());

export function getGoal() {
  const outerHtml = document.querySelector(".goal");
  return outerHtml.outerHTML;
}

console.log(getGoal());
