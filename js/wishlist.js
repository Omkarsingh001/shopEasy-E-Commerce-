const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistContainer");

function displayWishlist() {
  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = "<h2>Your wishlist is empty ❤️</h2>";

    return;
  }

  wishlist.forEach((item, index) => {
    container.innerHTML += `

        <div class="product-card">

            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>

            <p>$${item.price}</p>

            <button onclick="removeWishlist(${index})">
                Remove
            </button>

        </div>

        `;
  });
}

function removeWishlist(index) {
  wishlist.splice(index, 1);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  displayWishlist();
}

displayWishlist();
