const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const newObjectsData = {
    Email: email.value,
    Message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(newObjectsData));

  console.log(localStorage.getItem('feedback-form-state'));

  event.currentTarget.reset();
});
