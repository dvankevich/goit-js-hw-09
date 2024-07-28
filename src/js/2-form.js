'use strict';

let formData = JSON.parse('{"email":"","message":""}');

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';

//formData = localStorage.getItem(localStorageKey);

// https://builtin.com/software-engineering-perspectives/javascript-null-check

if (Object.is(localStorage.getItem(localStorageKey), null)) {
  formData = JSON.parse('{"email":"","message":""}');
  //console.log(formData);
} else {
  formData = JSON.parse(localStorage.getItem(localStorageKey));
  //console.log(formData);
}

email.value = formData.email;
message.value = formData.message;

// виглядає жахливо, але працює
form.addEventListener('input', evt => {
  //console.log(evt.target.attributes.name.value);
  switch (evt.target.attributes.name.value) {
    case 'email':
      formData.email = evt.target.value.trim();
      break;
    case 'message':
      formData.message = evt.target.value.trim();
      break;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  //console.log(evt.target.elements.email.value);
  if (
    evt.target.elements.message.value === '' ||
    evt.target.elements.email.value === ''
  ) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});

//console.log(JSON.stringify(localStorage.getItem(localStorageKey)));
