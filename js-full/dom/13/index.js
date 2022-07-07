export function getSection(num) {
  const spanElems = [...document.querySelectorAll("span")];

  const currentElem = spanElems.find((elem) => {
    const numAttr = Number(elem.getAttribute("data-number"));
    if (num === numAttr) {
      return elem;
    }
  });
  return currentElem.parentElement.getAttribute("data-section");
}
