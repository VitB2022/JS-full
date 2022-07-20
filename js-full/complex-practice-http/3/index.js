const baseUrl = 'https://62d57413d4406e52355b320b.mockapi.io/api/v1/post-to-form';

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const createUser = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

const validateInputs = () => {
  if (formElem.reportValidity()) {
    buttonElem.removeAttribute('disabled');
  }
};

const getUserData = () => {
  createUser(Object.fromEntries(new FormData(formElem)))
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

formElem.addEventListener('input', validateInputs);
buttonElem.addEventListener('click', getUserData);
buttonElem.addEventListener('click', () => buttonElem.setAttribute('disabled', false));
