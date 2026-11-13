const navbarSearch = document.getElementById("navbarSearch");
const searchBtn = document.getElementById("searchBtn");

function searchProducts() {
  const keyword = navbarSearch.value.trim();

  if (keyword === "") return;

  window.location.href = `products.html?search=${encodeURIComponent(keyword)}`;
}

searchBtn.addEventListener("click", searchProducts);

navbarSearch.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchProducts();
  }
});
