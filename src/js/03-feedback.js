import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

populateText();
const formData = {};

form.addEventListener('input', throttle(checkedInputValue, 500));

function checkedInputValue(event) {
  const name = event.target.name;
  const value = event.target.value;
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
  if (newFormData) {
    console.log('Є запис');
    const { email, message } = form.elements;
    email.value = newFormData.email || '';
    message.value = newFormData.message || '';
  }
}
