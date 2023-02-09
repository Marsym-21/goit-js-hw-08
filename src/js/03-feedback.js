import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
let name;
let value;
populateText();

form.addEventListener(
  'input',
  throttle(event => {
    name = event.target.name;
    value = event.target.value;
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  event.target.reset();
});

function populateText() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const newFormData = JSON.parse(savedData);
  if (savedData) {
    console.log('Є запис');
    for (key in newFormData) {
      if (key === name) {
        value = newFormData[key];
      }
    }
  }
}
