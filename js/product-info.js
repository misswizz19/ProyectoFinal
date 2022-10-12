const url_product = "https://japceibal.github.io/emercado-api/products/" + localStorage.getItem(`catIDobject`) + ".json";  
console.log(url_product)       
const url_coment = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem(`catIDobject`) + ".json"; 
console.log(url_coment) 

let product;       

let coment;        


function prodrela(id) {  
  localStorage.setItem("catIDobject", id);  
  window.location = "product-info.html"  
}




function traer_producto() {    
  fetch(url_product)
    .then(response => response.json())  
    .then(data => { console.log(data); return data })  
    .then(data => { product = data; return data })  
    .then(product => { console.log("product dentro de fetch", product); return product })  
    .then(product => informacion_del_product(product)) 
    .then(product => PrRela(product)) 
    .catch(error => console.log(error))  
}

traer_producto(); 

function traer_comentario() { 
  fetch(url_coment)  
    .then(response => response.json())  
    .then(data => { console.log(data); return data }) 
    .then(data => { coment = data; return data })  
    .then(coment => imprimir_comentarios(coment))  
    .catch(error => console.log(error))  
};
traer_comentario();  


function informacion_del_product(product) {  
  console.log("dentro", product)    
  let data_productos = ""    

  data_productos +=   
  `    
        <div>
          <h2>${product.name}</h2>
          <hr width="100%" color="black"/>
          <p> </p>
          <p><strong>Precio:</strong> UYU ${product.cost}</p>
          <p><strong>Descripción: </strong>${product.description}</p>
          <p><strong>Categoria: </strong>${product.category}</p>
          <p><strong>Cantidad de vendidos: </strong>${product.soldCount}</p>
          <p><strong>Imágenes ilustrativas</strong></p>
          <p> <img src="${product.images[0]}" height = "196"> <img src="${product.images[1]}" height = "196"> <img src="${product.images[2]}" height = "196"> <img src="${product.images[3]}" height = "196"></p>
        </div>
          `
  document.getElementById("product-i").innerHTML = data_productos;  
  return product;  
}

function imprimir_comentarios() {   
  let data_coment = ""  

  for (let i = 0; i < coment.length; i++) {  
    let star = coment[i].score  
    console.log("stars", star)  
    if (star == 0) {  
      data_coment +=   
      `
<div class="list-group-item">
<p><strong>${coment[i].user}</strong> - ${coment[i].dateTime} - ${coment[i].score} 
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
           <p>${coment[i].description}</P>
          </div>
            `
    } else if (star == 1) { 
      data_coment +=   
      `
<div class="list-group-item">
<p><strong>${coment[i].user}</strong> - ${coment[i].dateTime} - ${coment[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
   <p>${coment[i].description}</P>
  </div>
    `
    } else if (star == 2) {  
      data_coment +=   
      `
<div class="list-group-item">
<p><strong>${coment[i].user}</strong> - ${coment[i].dateTime} - ${coment[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
 <p>${coment[i].description}</P>
</div>
  `
    } else if (star == 3) {  
      data_coment += `
<div class="list-group-item">
<p><strong>${coment[i].user}</strong> - ${coment[i].dateTime} - ${coment[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span></p>
 <p>${coment[i].description}</P>
</div>
  `
    } else if (star == 4) {
      data_coment += `
<div class="list-group-item">
<p><strong>${coment[i].user}</strong> - ${coment[i].dateTime} - ${coment[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span></p>
 <p>${coment[i].description}</P>
</div>
  `
    } else if (star == 5) {
      data_coment += `
<div class="list-group-item">
<p><strong>${coment[i].user}</strong> - ${coment[i].dateTime} - ${coment[i].score} 
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span></p>
 <p>${coment[i].description}</P>
</div>
  `
    }

  }

  document.getElementById("comenta").innerHTML = data_coment;    
}


function PrRela(product) { 
  console.log("dentro2", product)  
  let ProductRelat = ""  
  for  (let i = 0; i < product.relatedProducts.length; i++) {  
    ProductRelat +=   `  
    <div onclick="prodrela(${product.relatedProducts[i].id})" class="cursor-active espaciado">
        <div>
            <div align="center">
                <img src="${product.relatedProducts[i].image}"class="img-thumbnail" style= width:300px height:300px>
            </div>
            <div>
                <p class="mb-1, Alinear_Felx">${product.relatedProducts[i].name}</p>
            </div>
        </div>
    </div>
    ` 

  }  



  document.getElementById("relatedProducts").innerHTML = ProductRelat;  
} 


