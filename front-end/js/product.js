var product = document.getElementById('product');
// recupere l'id de l'ourson dans l'url 
var params = new URLSearchParams(window.location.search);
var id = params.get("id");
// affiche le nom l'image et la description d'un ourson
ajaxGet("http://localhost:3000/api/teddies/"+ id, function (reponse) {
    // Transforme la réponse en un élément ourson
    var ourson = JSON.parse(reponse);
    console.log(ourson);
    // Initialisation des variables contenant les informations sur l'ourson
    var nom = document.createElement("h2");
    nom.textContent = ourson.name;
    var img = document.createElement("img");
    img.style.width = "340px";
    img.src = ourson.imageUrl;
    var p = document.createElement("p");
    p.className = 'card-text';
    p.textContent = ourson.description;

    // création des éléments contenant les informations de l'ourson
    product.appendChild(nom);
    product.appendChild(img);
    product.appendChild(p);
    
    
});
