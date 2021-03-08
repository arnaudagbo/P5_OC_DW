//Création de la structure principale du tableau  
let facture = document.createElement("table");
let ligneTableau = document.createElement("tr");
let colonneNom = document.createElement("th");
let colonnePrixUnitaire = document.createElement("th");
let colonneRemove = document.createElement("th");
let ligneTotal = document.createElement("tr");
let colonneRefTotal = document.createElement("th");
let colonnePrixPaye = document.createElement("td");

 //Placement de la structure dans la page et du contenu des entetes
 let factureSection = document.getElementById("panier");
 factureSection.appendChild(facture);
 facture.appendChild(ligneTableau);
 ligneTableau.appendChild(colonneNom);
 colonneNom.textContent = "Nom du produit";
 ligneTableau.appendChild(colonnePrixUnitaire);
 colonnePrixUnitaire.textContent = "Prix du produit";

//Pour chaque produit du panier, on créé une ligne avec le nom, le prix

 //Initialisation de l'incrémentation de l'id des lignes pour chaque produit ( pour pouvoir les supprimer )
 let i = 0;

 // Initialisation du tableau de produits 
 let products = [];

 // Initialisation de la variable contenant les valeurs du local storage
let panierLocalStorage = JSON.parse(localStorage.getItem("userPanier"));

//console.log(panierLocalStorage);
//console.log(panierLocalStorage[2].name); retourne le nom de l'objet 2



panierLocalStorage.forEach((produit)=>{
    
    // Pour chaque produit une ligne est crée avec son nom, son prix et une icone pour supprimer le produit du panier
    let ligneProduit = document.createElement("tr");
    let nomProduit = document.createElement("td");
    let prixUnitProduit = document.createElement("td");
    let removeProduit = document.createElement("i");
    let lienPageProduit = document.createElement('a');


    //Attribution des class pour le css
    ligneProduit.setAttribute("id", "produit"+i);
    removeProduit.setAttribute("id", "remove"+i);
    removeProduit.setAttribute('class', "fas fa-trash-alt annulerProduit");

    i++;

    //Insertion dans le HTML
    facture.appendChild(ligneProduit);
    ligneProduit.appendChild(lienPageProduit);
    lienPageProduit.appendChild(nomProduit);
    ligneProduit.appendChild(prixUnitProduit);
    ligneProduit.appendChild(removeProduit);

    //Contenu des lignes
    nomProduit.innerHTML = produit.name;
    prixUnitProduit.textContent = produit.price / 100 + " €";
    lienPageProduit.href = '../front-end/product.html?id=' + produit._id;
    lienPageProduit.ariaLabel = "Page du produit";
});

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const address = document.getElementById('address')
const city = document.getElementById('city')
const email = document.getElementById('email')
const submit = document.getElementById('sendForm')

submit.addEventListener('click', function (event) { // Au moment du la soumission du formulaire :
    event.preventDefault()
    const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value
      }

    panierLocalStorage.forEach((produit)=>{
        products.push(produit._id);
    });

    let objet = {
        contact,
        products
    };
    console.log(objet);

    // Conversion en JSON
    let objetRequest = JSON.stringify(objet);

    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/teddies/order");
    request.setRequestHeader("Content-Type", "application/json");
    // envoi données au format JSON
    request.send(objetRequest);
    // récupération de la réponse
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = request.responseText,
                json = JSON.parse(response);
                console.log(json);
        }
    }

    contact = {};
    products = [];
      
  })