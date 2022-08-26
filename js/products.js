
let lista = [];


const NuestraUrlCambiante = localStorage.getItem("Fetchh");
const ColeccionDeProductos = NuestraUrlCambiante;



fetch(ColeccionDeProductos)
.then(response => {return response.json()})
.then(data=>{


    let NombreDeLista="";

    NombreDeLista +=`<h2>${data.catName}</h2>`


    document.getElementById("TituloDelArticulo").innerHTML = NombreDeLista;

    console.log(data.catName);

   

    for(let auto in data.products){
        lista.push(data.products[auto]);

    }


    let htmlContentToAppend="";

    for(let i=0; i<lista.length; i++){

        let products = lista[i];
        htmlContentToAppend += `

       
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="${products.image}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${products.name}</h4>
                        <div>
                            ${products.currency} ${products.cost}
                            <br/>
                            <small class="text-muted">
                                ${products.soldCount} vendidos
                            </small>
                        </div>
                    </div>

                    ${products.description}
                </div>
            </div>
        </div>
        `;

        document.getElementById('prod-list-container').innerHTML = htmlContentToAppend;
    }
})
