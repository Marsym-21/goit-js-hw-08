import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

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

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newObjectsData));

    const savedData = localStorage.getItem(STORAGE_KEY);
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

  localStorage.removeItem(STORAGE_KEY);
  console.log(objectsData);

  event.currentTarget.reset();
});
