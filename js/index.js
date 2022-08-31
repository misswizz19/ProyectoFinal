document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});






    
  
function Logeando() {
    if (localStorage.getItem(`login`) == null ) { //si el usuario no esta logeado
        window.location.href = "login.html"  //redirecciona a login.html
    }else{ //si el usuario esta logeado
        document.getElementById("Usuario2").innerHTML = localStorage.getItem(`Usuario`) //muestra el usuario logeado en el header
       
    }
};
Logeando();4 //llama a la funcion Logeando()
