/*Affichage des informations sur la page de confirmation
**********************************************/

	if(sessionStorage.getItem("order") != null){
    //Parse du session storage
    //let order = sessionStorage.getItem("order");
    let order = sessionStorage.getItem("order");
    let prix = sessionStorage.getItem("prix");
    let firstname = sessionStorage.getItem("firstname");
    //let firstname = 'kikoo';
    //Implatation de prénom et de id de commande dans le html sur la page de confirmation
    document.getElementById("firstname").innerHTML = 'Felicitations pour votre commande ' + firstname;
    document.getElementById("prix").innerHTML = 'Le total de votre commande s\'élève à '+ prix+ ' €';
    document.getElementById("orderID").innerHTML = 'Votre numéro de commande est le ' +order;
    
    //Suppression de la clé du sessionStorage pour renvoyer au else si actualisation de la page ou via url direct
   // sessionStorage.removeItem("order");
}else{
  //avertissement et redirection vers l'accueil
  //alert("Aucune commande passée, vous êtes arrivé ici par erreur");
 // window.open("./index.html");
}
