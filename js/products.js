let Content;    
let htmlContentToAppend = "";  
let Minimo = undefined;  
let Maximo = undefined;    
        
const urls = "https://japceibal.github.io/emercado-api/cats_products/" + localStorage.getItem(`catID`) + ".json"  
console.log(urls)                              

function setCatID(id) {                                
    localStorage.setItem("catIDobject", id);         
    window.location = "product-info.html"      
}  
        
function traer() {          
    fetch(url)
        .then(response => response.json())  
        .then(data => { Content = data; return data })  
        .then(data => ViewContent(Content))  
        .catch(error => console.log(error)) 
}
traer();        


document.getElementById("sortAsc").addEventListener("click", () => {     
    console.log(Content.products.sort(  
        (a, b) => {  
            if (a.cost < b.cost) return -1;  
            if (b.cost < a.cost) return 1; 
            return 0;  
        }
    ))
    ViewContent(Content)                          

});


document.getElementById("sortDesc").addEventListener("click", () => {  
    console.log(Content.products.sort(  
        (a, b) =>{
            if (a.cost > b.cost) return -1;
            if (b.cost > a.cost) return 1;
            return 0;
        }
    ))
    ViewContent(Content)
});


document.getElementById("sortByCount").addEventListener("click", () => {  
    console.log(Content.products.sort(
        (a, b) =>{
            if (a.soldCount > b.soldCount) return -1;
            if (b.soldCount > a.soldCount) return 1;
            return 0;
        }
    ))
    ViewContent(Content)
});


document.getElementById("limpiarfiltro").addEventListener("click", function () {  
    document.getElementById("Minimo").value = "";  
    document.getElementById("Maximo").value = "";  

    Minimo = undefined;  
    Maximo = undefined;       

    ViewContent(Content)  
});


document.getElementById("aplicarfiltro").addEventListener("click", () =>{  
    Minimo = document.getElementById("Minimo").value;  
    Maximo = document.getElementById("Maximo").value;  

    ViewContent(Content)  

});


function ViewContent(Content) {  

    let htmlContentToAppend = ""  
5
    for (let i = 0; i < Content.products.length; i++){  

        if (((Minimo == undefined) || (Minimo != undefined && Content.products[i].cost >= Minimo)) &&  
            ((Maximo == undefined) || (Maximo != undefined && Content.products[i].cost <= Maximo))){    

            htmlContentToAppend +=   
                `
            <div onclick="setCatID(${Content.products[i].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${Content.products[i].image}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${Content.products[i].name} - ${Content.products[i].currency} ${Content.products[i].cost} </h4>
                            <small class="text-muted">${Content.products[i].soldCount} Vendidos</small> 
                        </div>
                        <p class="mb-1">${Content.products[i].description}</p>
                    </div>
                </div>
            </div>
            `
        }
    }
    document.getElementById("informacion").innerHTML = htmlContentToAppend; 
    TituloDelArticulo2 = `<h2 class="centrartexto">Productos</h2>   
        <p class="centrartexto">Verás aqui todos los productos de la categoria<strong> ${Content.catName}</strong></p>  ` 
    document.getElementById("TituloDelArticulo").innerHTML = TituloDelArticulo2  

}
