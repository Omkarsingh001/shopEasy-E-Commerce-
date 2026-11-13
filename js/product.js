const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find((item) => item.id === id);

const container = document.getElementById("productDetails");

container.innerHTML = `

<div class="details-container">

<img src="${product.image}">

<div>

<h1>${product.name}</h1>

<h2>$${product.price}</h2>

<p class="rating">
    ⭐ ${product.rating} / 5
</p>

<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
This is a premium quality product with excellent customer reviews.
</p>

<button onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

</div>

`;

function addToCart(id) {
  const product = products.find((item) => item.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...product,

      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  showToast("🛒 Product Added");
}
