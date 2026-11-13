const cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryItems = document.getElementById("summaryItems");
const subtotal = document.getElementById("subtotal");
const grandTotal = document.getElementById("grandTotal");

let total = 0;

cart.forEach((item) => {
  const itemTotal = item.price * item.quantity;

  total += itemTotal;

  summaryItems.innerHTML += `

    <div class="summary-item">

        <span>${item.name} × ${item.quantity}</span>

        <span>$${itemTotal.toFixed(2)}</span>

    </div>

    `;
});

subtotal.textContent = `$${total.toFixed(2)}`;

const shipping = 10;
const tax = 5;

grandTotal.textContent = `$${(total + shipping + tax).toFixed(2)}`;

document.getElementById("placeOrder").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your cart is empty.");
    return;
  }

  localStorage.removeItem("cart");

  showToast("🎉 Order Placed Successfully!");

  setTimeout(() => {
    window.location.href = "order-success.html";
  }, 2000);
});
