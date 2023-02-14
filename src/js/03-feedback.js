import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

populateText();
const formData = {};
form.addEventListener('input', throttle(checkedInputValue, 500));

function checkedInputValue(event) {
  const { email, message } = form.elements;

  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value;
  console.log(formData);

  if (email.value !== '') {
    console.log(email.value);
  }
  if (message.value !== '') {
    console.log(message.value);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = form.elements;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
});

function populateText() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const newFormData = JSON.parse(savedData);
  if (newFormData) {
    const { email, message } = form.elements;
    email.value = newFormData.email || '';
    message.value = newFormData.message || '';
  }
}
