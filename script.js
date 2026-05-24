const products = [
    {
        name: "Laptop",
        price: "$500",
        image: "images/laptop.jpg"
    },
    {
        name: "Phone",
        price: "$250",
        image: "images/phone.jpg"
    },
    {
        name: "Headphones",
        price: "$40",
        image: "images/headphones.jpg"
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