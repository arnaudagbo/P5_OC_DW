// let name = document.getElementById('name');
// function getTeddies(){
//     fetch("http://localhost:3000/api/teddies")
//     .then(function(res){
//         return res.json()
//     })
//     .then((data)=>{data.forEach(item=>console.log(item))})
// }
// getTeddies()

// function getTeddy1(){
//     fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
//     .then(function(res){
//         return res.json()
//     })
//     .then((data)=>name.innerHTML(data))
// }

// var product = document.getElementById("products");
// // Accès aux informations publiques sur le Premier Ministre
// ajaxGet("http://localhost:3000/api/teddies/5be9c8541c9d440000665243", function (reponse) {
//     var teddy = JSON.parse(reponse);
//     // Ajout du nom, de la description, du prix et de l'image de l'ourson dans la page web
//     var nameElt = document.createElement("h1");
//     nameElt.textContent = teddy.name;
//     var descriptionElt = document.createElement("p");
//     descriptionElt.textContent = teddy.description;
//     var logoElt = document.createElement("img");
//     logoElt.style.width = "400px";
//     logoElt.src = teddy.imageUrl;
//     var priceElt = document.createElement("p");
//     priceElt.textContent = teddy.price;
//     var colorElt = document.createElement("p");
//     colorElt.textContent = teddy.colors;
//     product.appendChild(nameElt);
//     product.appendChild(descriptionElt);
//     product.appendChild(logoElt);
//     product.appendChild(priceElt);
//     product.appendChild(colorElt);
// });

// // page list à décommenter plus tard
// // selectionne la div liste
// var listeElt = document.getElementById('list');
// // récupère la liste des oursons
// ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
//     // Transforme la réponse en un tableau d'articles
//     var articles = JSON.parse(reponse);
//     articles.forEach(function (article) {
//         // Ajout du titre et du contenu de chaque article
//         var titreElt = document.createElement("h2");
//         titreElt.textContent = article.name;
//         var contenuElt = document.createElement("p");
//         contenuElt.textContent = article.description;
//         contenuElt.style.width = "400px";
//         var logoElt = document.createElement("img");
//         logoElt.style.width = "400px";
//         logoElt.src = article.imageUrl;
//         var priceElt = document.createElement("p");
//         priceElt.textContent = article.price;
//         var colorElt = document.createElement("p");
//         colorElt.textContent = article.colors;
//         listeElt.appendChild(titreElt);
//         listeElt.appendChild(contenuElt);
//         listeElt.appendChild(logoElt);
//         listeElt.appendChild(priceElt);
//         listeElt.appendChild(colorElt);
//     });
// });


// Essai page d'accueuil
// selectionne la div row
var rowElt = document.getElementById('ligne');
// récupère la liste des oursons
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    // Transforme la réponse en un tableau d'oursons
    var oursons = JSON.parse(reponse);
    console.log(oursons);
    oursons.forEach(function (ourson) {
        // Ajout du nom, de la description, de l'image et du prix de chaque ourson
        var div = document.createElement("div");
        div.className = 'col-md-4';
        var div2 = document.createElement("div");
        div2.className = 'card mb-4 shadow-sm';
        var div3 = document.createElement("div");
        div3.className = 'card-body';
        var p = document.createElement("p");
        p.className = 'card-text';
        p.textContent = ourson.description;
        var nom = document.createElement("h2");
        nom.textContent = ourson.name;

        var img = document.createElement("img");
        img.style.width = "340px";
        img.src = ourson.imageUrl;


        // var titreElt = document.createElement("h2");
        // titreElt.textContent = ourson.name;
        // var contenuElt = document.createElement("p");
        // contenuElt.textContent = ourson.description;
        // contenuElt.style.width = "400px";
        // var logoElt = document.createElement("img");
        // logoElt.style.width = "400px";
        // logoElt.src = ourson.imageUrl;
        // var priceElt = document.createElement("p");
        // priceElt.textContent = ourson.price;
        // var colorElt = document.createElement("p");
        // colorElt.textContent = ourson.colors;

        // a decommenter ensuite
        // rowElt.appendChild(div);
        // rowElt.appendChild(div2);
        // rowElt.appendChild(div2);
        // rowElt.appendChild(p);
        // rowElt.appendChild(nom);

        rowElt.appendChild(div);
        div.appendChild(div2);
        div2.appendChild(img);
        div2.appendChild(div3);
        div3.appendChild(nom);

        // p.appendChild(nom);
        div3.appendChild(p);

        //rowElt.appendChild(div);

        // rowElt.appendChild(titreElt);
        // rowElt.appendChild(contenuElt);
        // rowElt.appendChild(logoElt);
        // rowElt.appendChild(priceElt);
        // rowElt.appendChild(colorElt);
    });
});