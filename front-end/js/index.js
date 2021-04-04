// selectionne l'élément à partir du quel le html sera généré
var rowElt = document.getElementById('items');
// récupère la liste des oursons
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    // Transforme la réponse en un tableau d'oursons
    var oursons = JSON.parse(reponse);
    oursons.forEach(function (ourson) {
        // Ajout du nom, de la description, de l'image et du prix de chaque ourson
        var div = document.createElement("div");
        div.className = 'col-lg-4 col-sm-6 mb-4';
        var div2 = document.createElement("div");
        div2.className = 'card h-100'; // lien photo
        var div3 = document.createElement("div");
        div3.className = 'card-body'; // texte
        var h4 = document.createElement("h4");
        h4.className = 'card-title';
        var p = document.createElement("a");
        p.textContent = ourson.name;
        var p2 = document.createElement("p");
        p2.className = 'card-text';
        p2.textContent = ourson.description;
        let linkProductsPage = document.createElement('a');
        let idProduct = ourson._id;
        linkProductsPage.href = 'product.html?id='+ idProduct;
        linkProductsPage.ariaLabel = "Page du produit";
        var img = document.createElement("img");
        img.className = 'card-img-top'
        img.src = ourson.imageUrl;
        rowElt.appendChild(div);
        div.appendChild(div2);
        div2.appendChild(linkProductsPage);
        linkProductsPage.appendChild(img);
        div2.appendChild(div3);
        div3.appendChild(h4);
        h4.appendChild(p);
        div3.appendChild(p2);
    });
});