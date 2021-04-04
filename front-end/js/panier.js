//Création de la structure principale du tableau constituant le panier
let facture = document.createElement("table");
facture.id = "tableau";
let ligneTableau = document.createElement("tr");
let colonneNom = document.createElement("th");
let colonnePrixUnitaire = document.createElement("th");
let colonneRemove = document.createElement("th");
let ligneTotal = document.createElement("tr");

 // Initialisation du tableau de produits 
 let products = [];

 // Initialisation de la variable contenant les valeurs du local storage
let panierLocalStorage = JSON.parse(localStorage.getItem("userPanier"));

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const address = document.getElementById('address')
const city = document.getElementById('city')
const email = document.getElementById('email')
const submit = document.getElementById('sendForm')

  if (panierLocalStorage == null || panierLocalStorage == undefined || panierLocalStorage == "")
  {
    submit.disabled = true;
    let message = document.getElementById("panier");
    let h1 = document.createElement("h4");
    h1.innerText = "Choisissez un ou plusieurs ours en peluche à rajouter dans votre panier avant de passer votre commande :)"
    message.appendChild(h1);
  }
  else 
  {

    //Placement de la structure dans la page et du contenu des entetes
    let factureSection = document.getElementById("panier");
    factureSection.appendChild(facture);
    facture.appendChild(ligneTableau);
    ligneTableau.appendChild(colonneNom);
    colonneNom.textContent = "Nom du produit";
    ligneTableau.appendChild(colonnePrixUnitaire);
    colonnePrixUnitaire.textContent = "Prix du produit";



  panierLocalStorage.forEach((produit)=>{

     
      
      // Pour chaque produit une ligne est crée avec son nom, son prix et une icone pour supprimer le produit du panier
      let ligneProduit = document.createElement("tr");
      let nomProduit = document.createElement("td");
      let prixUnitProduit = document.createElement("td");
      let removeProduit = document.createElement("i");
      let lienPageProduit = document.createElement('a');

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
  }

function priceTotal(){
  let price = 0
  panierLocalStorage.forEach((produit)=>{
  price +=produit.price / 100;
  });
  return price
}

let ligneProduit = document.createElement("tr");
let lignetotal = document.createElement("td");
let prixtotal = document.createElement("td");

facture.appendChild(ligneProduit);
ligneProduit.appendChild(lignetotal);
ligneProduit.appendChild(prixtotal);
lignetotal.innerHTML = 'Total';
prixtotal.innerHTML = priceTotal()+" €";

// Verification des inputs
let checkNumber = /[0-9]/;

function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email)
}

submit.addEventListener('click', function (event) { // Au moment du la soumission du formulaire :
    event.preventDefault()
    if (firstName.value == "" || lastName.value == "" || address.value == "" || email.value == ""  )
        {
            alert("Veuillez remplir tous les champs du formulaire");
        }
        else if (checkNumber.test(firstName.value) == true || checkNumber.test(lastName.value) == true)
        {
            alert("Renseignez votre nom et prénom sans chiffres s'il vous plait");
        }
        else if (emailIsValid(email.value) == false )
        {
            alert("Renseignez un email au format xxxx@yyyy.zzz");
        }
        else

        {
          const contact = {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
          }
            
            let totalPaye = 0;
            panierLocalStorage.forEach((produit)=>{
                products.push(produit._id);
                totalPaye += produit.price / 100;
            });
        
            let objet = {
                contact,
                products
            };

            // Conversion en JSON
            let objetRequest = JSON.stringify(objet);
        
            sessionStorage.setItem("prix", totalPaye);
            sessionStorage.setItem("firstname", contact.firstName);
            sessionStorage.setItem("mail", contact.email);
        
        // POST request using fetch() 
        fetch("http://localhost:3000/api/teddies/order", { 
          method: "POST", 
          body: objetRequest, 
          headers: { 
            "Content-type": "application/json; charset=UTF-8"
          } 
        }) 
        .then(response => response.json())
        .then(json => sessionStorage.setItem("order", json.orderId))
        localStorage.clear()
        setTimeout(() => { document.location = './confirmation.html' }, 2000);
            }


  })