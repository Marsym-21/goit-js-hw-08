const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(event => {
    const {
      elements: { email, message },
    } = event.currentTarget;

    const newObjectsData = {
      Email: email.value,
      Message: message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(newObjectsData));

    const savedData = localStorage.getItem('feedback-form-state');
    console.log(savedData);

    const savedDataArray = JSON.parse(savedData);

    if (savedDataArray.Email !== '') {
      console.log('Заповнена Строка');
      email.value = savedDataArray.Email;
      //   message.value = savedDataArray.Message;
    }
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const objectsData = {
    Email: email.value,
    Message: message.value,
  };

  localStorage.removeItem('feedback-form-state');
  console.log(objectsData);
  event.currentTarget.reset;
});
