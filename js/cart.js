const url_carritoo = "https://japceibal.github.io/emercado-api/user_cart/" + localStorage.getItem(`Usuario`) + ".json"
console.log(url_carritoo)
let carro


function carritoto_JSON() {
    fetch(url_carritoo)
        .then(response => response.json())
        .then(data => { console.log(data); return data })
        .then(data => { carro = data; return data })
        .then(product => { console.log("carrito", carro); return carro })
        .then(product => carritos_print())
        .then(product => car_Sub_Ini())
        .catch(error => console.log(error))
}
carritoto_JSON();

function carritos_print() {
    console.log("dentroDelCarrito", carro)
    let data_carro = ""

    for (let i = 0; i < carro.articles.length; i++) {
        data_carro += `<img class="IMG_CARRO" src="${carro.articles[i].image}"><p>${carro.articles[i].name}</p><p>USD ${carro.articles[i].unitCost}</p> <div><input type="number" name="Cant" class="form-control cantCaja" id="${i}" value="1"
        oninput="cant_cuad()"></div>`
    }
    document.getElementById("carritoProduct").innerHTML = data_carro;
    return carro;
}

function car_Sub_Ini() {
    console.log("dentroDelCarrito", carro)
    let dat_sub = ""
    dat_sub += `<strong><p>USD ${carro.articles[0].unitCost}</p></strong>`
    document.getElementById("carritoSub").innerHTML = dat_sub;
    return carro;
}

function cant_cuad() {
    let subTotals = ""

    for (let i = 0; i < carro.articles.length; i++) {
      if (document.getElementById([i]).value > 0){
        subTotals += document.getElementById([i]).value * carro.articles[i].unitCost
        subTotals = "USD" + subTotals 
      }else{
        subTotals +=  "<p>La cantidad debe</p> <p>ser superior a. 1</p>"
    }}
  
    carrito_subtot(subTotals)

}

function carrito_subtot(subTotals) {
    console.log(subTotals)
    let data_subtotal = ""

    for(let i = 0; i < carro.articles.length; i++){
        data_subtotal += `
         <strong><p>${subTotals}</p></strong>
             `
    }
 
     document.getElementById("carritoSub").innerHTML = data_subtotal;
 
 
 }