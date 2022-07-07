export function squaredNumbers() {
  const number = [...document.querySelectorAll(".number")];
  const squaredNums = (el) => el * el;

  number.forEach((elem) => {
    const { _, number } = elem.dataset;

    elem.setAttribute("data-squared-number", squaredNums(number));
  });
}
