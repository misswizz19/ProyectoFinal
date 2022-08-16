


let loginForm;
let submitButton;
let emailInput;
let pwdInput;
let inputs;
let errorElement;
let loader;



document.addEventListener('DOMContentLoaded', function () {
    loginForm = document.forms['login'];
    submitButton = document.querySelector('button[type="submit"]');
    emailInput = document.querySelector('input[name="email"]');
    pwdInput = document.querySelector('input[name="password"]');
    inputs = loginForm.getElementsByTagName('input');
    errorElement = document.getElementById('error-element');
    loader = document.querySelector('.loader');

    loginForm.addEventListener('submit', onSubmit);
});


function onSubmit(e) {
    e.preventDefault();
    let hasErrors = false;

    for (input of inputs) {
        if (!input.value) {
            hasErrors = true;

            showError(`Todos los campos son requeridos`);
            input.style.boxShadow =
                '0px 0px 2px red, 0px 0px 2px red, 0px 0px 2px red';
        } else {
            window.location.href = 'login.html';
        }
    }
}

function showError(message) {
    errorElement.getElementsByTagName('h4')[0].innerHTML = message;
    errorElement.style.display = 'block';
}


   
          
