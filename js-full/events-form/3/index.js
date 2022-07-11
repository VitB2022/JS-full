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

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.setAttribute('data-num', i);

      checkboxElem.addEventListener('click', function (event) {
        const checkBox = +event.target.dataset.num;

        if (tasks[checkBox].done) {
          tasks[checkBox].done = false;
        } else {
          tasks[checkBox].done = true;
        }
        listElem.innerHTML = '';
        renderTasks(tasks);
      });

      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

renderTasks(tasks);

const clickButton = document.querySelector('.create-task-btn');
const getTask = document.querySelector('.task-input');

const handlerButton = () => {
  if (!getTask.value) {
    return;
  }
  const createTask = { text: getTask.value, done: false };
  tasks.push(createTask);
  getTask.value = '';
  listElem.innerHTML = '';

  renderTasks(tasks);
};

clickButton.addEventListener('click', handlerButton);
