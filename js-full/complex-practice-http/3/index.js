const baseUrl = 'https://62d57413d4406e52355b320b.mockapi.io/api/v1/post-to-form';

const form = document.querySelector('.login-form');
const button = document.querySelector('.submit-button');

const checkInputs = () => {
  form.reportValidity()
    ? button.removeAttribute('disabled', true)
    : button.setAttribute('disabled', false);
};
form.addEventListener('input', checkInputs);

const createUser = userData => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

const getUserData = () => {
  createUser(Object.fromEntries(new FormData(form)))
    .then(response => {
      return response.json();
    })
    .then(data => {
      alert(JSON.stringify(data));
      form.reset();
    });
};

button.addEventListener('click', getUserData);
button.addEventListener('click', () => button.setAttribute('disabled', false));
