let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");
const totalPrice = document.getElementById("totalPrice");

function displayCart() {
  container.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<h2>Your Cart is Empty</h2>";
    totalPrice.textContent = 0;
    return;
  }

  cart.forEach((item) => {
    total += item.price * item.quantity;

    container.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>$${item.price}</p>

                <div class="quantity-box">

                    <button onclick="decreaseQuantity(${item.id})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQuantity(${item.id})">+</button>

                </div>

            </div>

            <button class="remove-btn"
                onclick="removeItem(${item.id})">

                Remove

            </button>

        </div>

        `;
  });

  totalPrice.textContent = total.toFixed(2);
}

function increaseQuantity(id) {
  const product = cart.find((item) => item.id === id);

  product.quantity++;

  saveCart();
}

function decreaseQuantity(id) {
  const product = cart.find((item) => item.id === id);

  if (product.quantity > 1) {
    product.quantity--;
  } else {
    removeItem(id);
    return;
  }

  saveCart();
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);

  saveCart();

  showToast("🗑️ Product Removed");
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

displayCart();
