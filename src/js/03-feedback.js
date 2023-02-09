import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let name;
let value;
populateText();
const formData = {};

form.addEventListener('input', throttle(checkedInputValue, 500));

function checkedInputValue(event) {
  name = event.target.name;
  value = event.target.value;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

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
