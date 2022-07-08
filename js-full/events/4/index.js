const checkboxElem = document.querySelector(".task-status");

const changeCheckbox = () => {
  if (checkboxElem.checked) {
    console.log("true");
  } else {
    console.log("false");
  }
};
checkboxElem.addEventListener("change", changeCheckbox);
