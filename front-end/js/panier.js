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

