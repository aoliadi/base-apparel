const submitButton = document.getElementById('submit-button-js');
const errorMssg = document.getElementById('error-message-js');
const inputBox = document.getElementById('email-js');
const errorIcon = document.querySelector('.error-icon');
const formControl = inputBox.parentElement;
var inputBoxValue;

formControl.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});

function addError(mssg) {
    errorMssg.textContent = `${mssg}`;
    errorMssg.classList.remove('hide');
    errorIcon.classList.remove('hide');
    inputBox.style.border = '2px solid var(--soft-red)';
}

function removeError() {
    errorMssg.classList.add('hide');
    errorIcon.classList.add('hide');
    inputBox.style.border = '2px solid green';
}

function isEmail(param) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(param);
}

function checkInput() {
    inputBoxValue = inputBox.value;
    
    if (inputBoxValue === '' || inputBoxValue === null) {
        addError('Field cannot be empty.');
    } else if ( !isEmail(inputBoxValue) ) {
        addError('Please, provide a valid email.');
    } else {
        removeError();
    }
}