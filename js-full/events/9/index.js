const checkboxElem = document.querySelector(".task-status");

const changeCheckbox = (event) => {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkboxElem.addEventListener("change", changeCheckbox);
