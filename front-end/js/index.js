// selectionne l'élément à partir du quel le html sera généré
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
        let linkProductsPage = document.createElement('a');
        let idProduct = ourson._id;
        linkProductsPage.href = 'product.html?id='+ idProduct;
        linkProductsPage.ariaLabel = "Page du produit";
        var img = document.createElement("img");
        img.style.width = "340px";
        img.src = ourson.imageUrl;
        var prix = document.createElement("p");
        prix.textContent = ourson.price+"€";
        rowElt.appendChild(div);
        div.appendChild(div2);
        div2.appendChild(linkProductsPage);
        linkProductsPage.appendChild(img);
        div2.appendChild(div3);
        div3.appendChild(nom);
        div3.appendChild(p);
        div3.appendChild(prix);
    });
});