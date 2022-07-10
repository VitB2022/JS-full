'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');

      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

renderTasks(tasks);

const clickButton = document.querySelector('.create-task-btn');

const handlerButton = () => {
  const getTask = document.querySelector('.task-input');
  if (getTask.value !== '') {
    tasks.push({ text: getTask.value, done: false });

    const getListItemElem = document.createElement('li');
    getListItemElem.classList.add('list__item');
    getListItemElem.innerText = getTask.value;

    const getCheckboxElem = document.createElement('input');
    getCheckboxElem.setAttribute('type', 'checkbox');
    getCheckboxElem.classList.add('list__item-checkbox');

    listElem.prepend(getListItemElem);
    getListItemElem.prepend(getCheckboxElem);
    getTask.value = '';
  }
};

clickButton.addEventListener('click', handlerButton);

const handlerChexbox = () => {
  const lis = Array.from(listElem.querySelectorAll('.list__item'));
  const before = [],
    after = [];
  for (let li of lis) {
    if (li.querySelector(':checked')) {
      li.classList.add('list__item_done');
      after.push(li);
    } else {
      li.classList.remove('list__item_done');
      before.push(li);
    }
  }

  listElem.append(...before, ...after);
};
listElem.addEventListener('click', handlerChexbox);
