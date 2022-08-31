/*let loginForm;
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
*/



const Usuario = document.getElementById("email")  //email    
const Password = document.getElementById("contraseña") //contraseña  
const Butt = document.getElementById("button") //boton de ingresar 
//recopila la informacion del usuario y la guarda para luego poderla usar en index.js
window.onload=function(){  //cuando se cargue la pagina
Butt.addEventListener("click", (e) => {  //cuando se presiona el boton de ingresar 
    localStorage.setItem(`Usuario`, Usuario.value); //guarda el email del usuario en local storage
    localStorage.setItem(`Password`, Password.value); //guarda la contraseña del usuario en local storage
    localStorage.setItem(`login`, true); //si el usuario esta logeado;
}) 
}
