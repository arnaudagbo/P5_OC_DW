let name = document.getElementById('name');
function getTeddies(){
    fetch("http://localhost:3000/api/teddies")
    .then(function(res){
        return res.json()
    })
    .then((data)=>{data.forEach(item=>console.log(item))})
}
getTeddies()

function getTeddy1(){
    fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
    .then(function(res){
        return res.json()
    })
    .then((data)=>name.innerHTML(data))
}

var product = document.getElementById("products");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("http://localhost:3000/api/teddies/5be9c8541c9d440000665243", function (reponse) {
    var teddy = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var nameElt = document.createElement("h1");
    nameElt.textContent = teddy.name;
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = teddy.description;
    var logoElt = document.createElement("img");
    logoElt.style.width = "400px";
    logoElt.src = teddy.imageUrl;
    var priceElt = document.createElement("p");
    priceElt.textContent = teddy.price;
    var colorElt = document.createElement("p");
    colorElt.textContent = teddy.colors;
    product.appendChild(nameElt);
    product.appendChild(descriptionElt);
    product.appendChild(logoElt);
    product.appendChild(priceElt);
    product.appendChild(colorElt);
});