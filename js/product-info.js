const url_product = "https://japceibal.github.io/emercado-api/products/" + localStorage.getItem(`catIDobject`) + ".json";  //url del producto  
console.log(url_product)       
const url_coment = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem(`catIDobject`) + ".json"; //url de los comentarios
console.log(url_coment)

let product;  //variable global      

let coment;  //variable global       



function traer_producto() {  //funcion para traer el producto de la url del producto  
  fetch(url_product)  //trae la url del producto
    .then(response => response.json())  //convierte la url en json
    .then(data => { console.log(data); return data })  //imprime el json
    .then(data => { product = data; return data })  //guarda el json en la variable global product
    .then(product => { console.log("product dentro de fetch", product); return product })  //imprime la variable global product
    .then(product => informacion_del_product(product))  //llama a la funcion informacion_del_product  
    .catch(error => console.log(error))  //imprime el error
}
traer_producto();  //llama a la funcion traer_producto

function traer_comentario() {  //funcion para traer los comentarios de la url de los comentarios
  fetch(url_coment)  //trae la url de los comentarios
    .then(response => response.json())  //convierte la url en json
    .then(data => { console.log(data); return data })  //imprime el json
    .then(data => { coment = data; return data })  //guarda el json en la variable global coment
    .then(coment => imprimir_comentarios(coment))  //llama a la funcion imprimir_comentarios
    .catch(error => console.log(error))  //imprime el error
};
traer_comentario();  //llama a la funcion traer_comentario


function informacion_del_product(product) {  //funcion para imprimir la informacion del producto
  console.log("dentro", product)  //imprime la variable global product  
  let data_productos = ""  //variable para guardar la informacion del producto  

  data_productos +=   //guarda la informacion del producto en la variable data_productos
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
  document.getElementById("product-i").innerHTML = data_productos;  //imprime la informacion del producto en el html    
}

function imprimir_comentarios() {  //funcion para imprimir los comentarios  
  let data_coment = ""  //variable para guardar los comentarios

  for (let i = 0; i < coment.length; i++) {  //recorre el json de los comentarios
    let star = coment[i].score  //variable para guardar la cantidad de estrellas
    console.log("stars", star)  //imprime la cantidad de estrellas
    if (star == 0) {  //si la cantidad de estrellas es 0
      data_coment +=   //guarda los comentarios en la variable data_coment
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
    } else if (star == 1) {  //si la cantidad de estrellas es 1
      data_coment +=   //guarda los comentarios en la variable data_coment
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
    } else if (star == 2) {  //si la cantidad de estrellas es 2
      data_coment +=   //guarda los comentarios en la variable data_coment
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

  document.getElementById("comenta").innerHTML = data_coment;  //imprime los comentarios en el html
}