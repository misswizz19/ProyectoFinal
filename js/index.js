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
    if (localStorage.getItem(`login`) == null ) {  
        window.location.href = "login.html"  
    }else{ 
        document.getElementById("Usuario2").innerHTML = localStorage.getItem(`Usuario`) 
        
       
    }
};
Logeando();4 