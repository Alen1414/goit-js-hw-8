
import throttle from "lodash.throttle";
// const throttle = require('lodash.throttle');
const STORAGE_KEY ='fedback-msg';
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')

};
console.log(refs.form);
console.log(refs. textarea);
console.log(refs. input);

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput,500));
populateTextarea();

function onFormSubmit(evt){
evt.preventDefault();
console.log('отправляем форму');
evt.currentTarget.reset();
localStorage.removeItem('STORAGE_KEY');
};


function onTextareaInput(evt){
    const message = evt.currentTarget.value;
    console.log(message);
    localStorage.setItem('STORAGE_KEY', message);
};

function populateTextarea(){
    const savedMessage = localStorage.getItem('STORAGE_KEY');
    if (savedMessage){
        console.log(savedMessage);
        refs.textarea.value=savedMessage;
    }
};