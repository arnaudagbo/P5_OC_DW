/*Affichage des informations sur la page de confirmation
**********************************************/

	if(sessionStorage.getItem("order") != null){
    //Parse du session storage
    //let order = sessionStorage.getItem("order");
    let order = JSON.parse(sessionStorage.getItem("order"));
    //Implatation de prénom et de id de commande dans le html sur la page de confirmation
    document.getElementById("lastname").innerHTML = order
    document.getElementById("orderID").innerHTML = order
    
    //Suppression de la clé du sessionStorage pour renvoyer au else si actualisation de la page ou via url direct
    sessionStorage.removeItem("order");
}else{
  //avertissement et redirection vers l'accueil
  alert("Aucune commande passée, vous êtes arrivé ici par erreur");
  window.open("./index.html");
}
