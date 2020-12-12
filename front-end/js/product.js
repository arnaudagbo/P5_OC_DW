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
    var prix = document.createElement("p");
    prix.textContent = ourson.price+"€";
    var colors = ourson.colors;
    // option.value = colors;
    // option.textContent = colors;
    
    var button = document.createElement('button');
    button.textContent = "acheter";
    var select = document.createElement("select");
    // création des éléments contenant les informations de l'ourson
    product.appendChild(nom);
    product.appendChild(img);
    product.appendChild(p);
    
    product.appendChild(select);
    for (let i = 0; i < colors.length; i++){
        var option = document.createElement("option");
        option.value = colors[i];
        option.textContent = colors[i];
        select.appendChild(option);
    }
    product.appendChild(prix);
    product.appendChild(button);
});
