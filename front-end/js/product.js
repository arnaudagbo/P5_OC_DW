var product = document.getElementById('product');
// recupere l'id de l'ourson dans l'url 
var params = new URLSearchParams(window.location.search);
var id = params.get("id");

if(localStorage.getItem("userPanier")){
	console.log("Le panier de l'user existe dans le localStorage");
}else{
	console.log("Le panier n'existe pas, il va être crée et initialisé dans le localStorage");
  	//Le panier est un tableau de produits
  	let panierInit = [];
  	localStorage.setItem("userPanier", JSON.stringify(panierInit));
  };

//Tableau et objet demandé par l'API pour la commande
let contact;
let products = [];

//L'user a maintenant un panier
let userPanier = JSON.parse(localStorage.getItem("userPanier"));


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
    prix.textContent = ourson.price /100 +",00€";
    var colors = ourson.colors;
    var button = document.createElement('button');
    button.textContent = "ajouter au panier";
    button.id = 'add';
    var button2 = document.createElement('button');
    button2.textContent = "supprimer du panier";
    button2.id = 'delete';
    var select = document.createElement("select");

    // creation des variables contenant les informations pour la commande
    name = ourson.name;
    price = ourson.price /100;
    order = []
    order.push(name,price);

    // création des éléments contenant les informations de l'ourson
    product.appendChild(nom);
    product.appendChild(img);
    product.appendChild(p);
    product.appendChild(select);

    // Boucle pour afficher les différentes option de couleurs de l'ourson séléctionné
    for (let i = 0; i < colors.length; i++){
        var option = document.createElement("option");
        option.value = colors[i];
        option.textContent = colors[i];
        select.appendChild(option);
    }
    product.appendChild(prix);
    product.appendChild(button);
    product.appendChild(button2);

document.getElementById("add").addEventListener("click", function(event){
    userPanier.push(ourson);
    localStorage.setItem("userPanier", JSON.stringify(userPanier));

});

document.getElementById("delete").addEventListener("click", function(event){
    // supprime le local storage
    //localStorage.clear();

    // efface une ligne du local storage
    userPanier.splice(0, 1); 
    localStorage.setItem('userPanier', JSON.stringify(userPanier));
});

});



// // Sauvegarder les informations dans l’espace local courant
// localStorage.setItem("username", "John");

// // Accéder à des données enregistrées
// alert("username = " + localStorage.getItem("username"));
