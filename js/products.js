const productGrid = document.getElementById("productGrid");
// const productGrid =
// JSON.parse(localStorage.getItem("products")) ||

function displayProducts(items) {
  productGrid.innerHTML = "";

  items.forEach((product) => {
    productGrid.innerHTML += `

<div class="product-card" onclick="openProduct(${product.id})">


<img src="${product.image}">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<p class="rating">⭐ ${product.rating}</p>

<div class="product-buttons">

    <button onclick="addToCart(${product.id})">
        Add To Cart
    </button>

    <button onclick="addWishlist(${product.id})">
        ❤️ Wishlist
    </button>

</div>

</div>



`;
  });
}

function openProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

displayProducts(products);
function addToCart(id) {
  const product = products.find((item) => item.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  showToast("🛒 Product Added Successfully");
}

// search

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const search = searchInput.value.toLowerCase();

  const filtered = products.filter((product) => {
    return product.name.toLowerCase().includes(search);
  });

  displayProducts(filtered);
});

const categoryFilter = document.getElementById("categoryFilter");

categoryFilter.addEventListener("change", () => {
  if (categoryFilter.value === "all") {
    displayProducts(products);

    return;
  }

  const filtered = products.filter((product) => {
    return product.category === categoryFilter.value;
  });

  displayProducts(filtered);
});

const sortPrice = document.getElementById("sortPrice");

sortPrice.addEventListener("change", () => {
  let sorted = [...products];

  if (sortPrice.value === "low") {
    sorted.sort((a, b) => a.price - b.price);
  }

  if (sortPrice.value === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
});

function addWishlist(id) {
  const product = products.find((item) => item.id === id);

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Prevent duplicate items
  const alreadyExists = wishlist.some((item) => item.id === id);

  if (alreadyExists) {
    alert("Product is already in your wishlist.");
    return;
  }

  wishlist.push(product);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  showToast("❤️ Added to Wishlist");
}
