'use strict';

const tasks = [
  {
    text: 'Buy milk',
    done: false,
  },
  {
    text: 'Pick up Tom from airport',
    done: false,
  },
  {
    text: 'Visit party',
    done: false,
  },
  {
    text: 'Visit doctor',
    done: true,
  },
  {
    text: 'Buy meat',
    done: true,
  },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, i) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.dataset.i = +i;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });
  listElem.innerHTML = '';

  listElem.append(...listItemsElems);
};

renderTasks(tasks);

const clickButton = document.querySelector('.create-task-btn');

const handlerButton = () => {
  const getTask = document.querySelector('.task-input');
  let text = getTask.value;
  if (text) {
    tasks.push({
      text,
      done: false,
    });
    getTask.value = '';

    renderTasks(tasks);
    // console.log(tasks);
  }
};

clickButton.addEventListener('click', handlerButton);

const handlerCheckBox = event => {
  let target = event.target;
  let obj = tasks[target.dataset.i];
  if (obj.done === true) obj.done = false;
  else obj.done = true;

  renderTasks(tasks);
};

listElem.addEventListener('change', handlerCheckBox);
