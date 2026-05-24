const products = [
    {
        name: "Samosa",
        price: "Ksh.10",
        image: "image/Samosa.jpg"
    },
    {
        name: "Soft drinks",
        price: "50",
        image: "image/Soft drinks.jpg"
    },
    {
        name: "Eggs",
        price: "Ksh.25",
        image: "image/Eggs.jpg"
    },
    {
        name: "Cakes",
        price: "Ksh.70",
        image: "image/Cake.jpg"
    },
    {
        name: "Bread",
        price: "Ksh.70",
        image: "image/Bread.jpg"
    }, {
        name: "Tamu",
        price: "Ksh.50",
        image: "image/Tamu.png"
    }, {
        name: "Bread2",
        price: "Ksh.50",
        image: "image/Bread2.jpg"
    }, {
        name: "Milk",
        price: "Ksh.40",
        image: "image/Milk.jpg"
    }, {
        name: "U_fresh",
        price: "Ksh.20",
        image: "image/U_fresh.png"
    }, {
        name: "banana",
        price: "Ksh.5",
        image: "image/banana.jpg"
    }, {
        name: "Mango",
        price: "Ksh.20",
        image: "image/Mango.jpg"
    }, {
        name: "Tomatoes",
        price: "Ksh.90",
        image: "image/tomatoes.png"
    }, {
        name: "Pepper",
        price: "Ksh.5",
        image: "image/pepper.jpg"
    }, {
        name: "Onion_Red",
        price: "Ksh.10",
        image: "image/Onion-Red.jpg"
    }, {
        name: "Bell_pepper",
        price: "Ksh.10",
        image: "image/Bell_pepper.jpg"
    }, {
        name: "Garlic",
        price: "Ksh.20",
        image: "image/garlic.jpg"
    }, {
        name: "Lemon",
        price: "Ksh.5",
        image: "image/lemon.jpg"
    }, {
        name: "Potatoes",
        price: "Ksh.80",
        image: "image/potatoes.jpg"
    },
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
    productsContainer.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    </div>
  `;
});