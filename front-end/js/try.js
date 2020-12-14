document.getElementById("delete").addEventListener("click", function(event){
    // supprime le local storage
    //localStorage.clear();

    // efface une ligne du local storage
    function deleteArticle(i){
     userPanier.splice(i, 1);
     localStorage.clear();   
     localStorage.setItem('userPanier', JSON.stringify(userPanier));
     window.location.reload();
    }
    
    deleteArticle();
    
});





// // Sauvegarder les informations dans l’espace local courant
// localStorage.setItem("username", "John");

// // Accéder à des données enregistrées
// alert("username = " + localStorage.getItem("username"));