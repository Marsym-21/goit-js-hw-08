import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    const savedData = localStorage.getItem(STORAGE_KEY);
    const newFormData = JSON.parse(savedData);

    if (savedData) {
      console.log('Є запис');
      for (key in newFormData) {
        if (key === event.target.name) {
          event.target.value = newFormData[key];
        }
      }
    }
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  event.target.reset();
});
