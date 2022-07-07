export function finishList() {
  const list = document.querySelector(".list");
  const li1 = document.createElement("li");
  li1.textContent = "1";
  list.prepend(li1);
  const li4 = document.createElement("li");
  li4.textContent = "4";
  const li5 = document.querySelector(".special");
  li5.before(li4);
  const li6 = document.createElement("li");
  li6.textContent = "6";
  li5.after(li6);
  const li8 = document.createElement("li");
  li8.textContent = "8";
  list.append(li8);
  return li1, li4, li6, li8;
}

finishList();
