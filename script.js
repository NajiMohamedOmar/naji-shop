const products = [
    {
        name: "Samosa",
        price: "Ksh.10",
        image: "images/Samosa.jpg"
    },
    {
        name: "Soft drinks",
        price: "50",
        image: "images/Soft drinks.jpg"
    },
    {
        name: "Eggs",
        price: "Ksh.25",
        image: "images/Eggs.jpg"
    }
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