var cart = {
    products: [
        { Item: "iPhone Red", Price: 7.99, Stock: 10, Sale: "No" },
        { Item: "iPhone Blue", Price: 6.99, Stock: 20, Sale: "No" },
        { Item: "iPhone Green", Price: 5.99, Stock: 40, Sale: "Yes" }
    ],
    cartInfo: "",  
    product: document.getElementById("item"),
    displayProduct: function () {
        var ul = document.querySelector("ul");
        var img = document.querySelector("img");
        var productInfo = "";
        switch (this.product.value) {
            case "red":
                ul.innerHTML, this.cartInfo = "";
                for (var key in this.products[0]) 
                {
                    productInfo += "<li>" +key + " : " + this.products[0][key] + "</li>";
                    this.cartInfo += key + " : " + this.products[0][key] + "\n";
                }
                ul.innerHTML = productInfo;
                img.src = "images/red.png";
                break;
            case "blue":
                ul.innerHTML, this.cartInfo = "";
                for (var key in this.products[1]) 
                {
                    productInfo += "<li>" +key + " : " + this.products[1][key] + "</li>";
                    this.cartInfo += key + " : " + this.products[1][key] + "\n";
                }
                ul.innerHTML = productInfo;
                img.src = "images/blue.png";
                break;
            case "green":
                ul.innerHTML, this.cartInfo = "";
                for (var key in this.products[2]) 
                {
                    productInfo += "<li>" + key + " : " + this.products[2][key] + "</li>";
                    this.cartInfo += key + " : " + this.products[2][key] + "\n";
                }
                ul.innerHTML = productInfo;
                img.src = "images/green.png";
                break;
        }
    },
    buyProduct: function () {
        if (this.product.value === "") {
            alert("Please select a product.");
        }
        else 
        {
            alert("Are you sure you want to buy the following product?" + "\n" + this.cartInfo);
        }
    }
};