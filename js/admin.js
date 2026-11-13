let adminProducts =
JSON.parse(localStorage.getItem("products")) || products;

const productContainer =
document.getElementById("adminProducts");

document.getElementById("totalProducts").textContent =
adminProducts.length;

const cart =
JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cartItems").textContent =
cart.length;

const wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

document.getElementById("wishlistItems").textContent =
wishlist.length;

function displayProducts(){

productContainer.innerHTML="";

adminProducts.forEach(product=>{

productContainer.innerHTML+=`

<div class="admin-product">

<img src="${product.image}">

<div>

<h3>${product.name}</h3>

<p>$${product.price}</p>

</div>

<button onclick="deleteProduct(${product.id})">

Delete

</button>

</div>

`;

});

}

displayProducts();

document.getElementById("productForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

const newProduct={

id:Date.now(),

name:productName.value,

price:Number(productPrice.value),

category:productCategory.value,

image:productImage.value

};

adminProducts.push(newProduct);

localStorage.setItem("products",
JSON.stringify(adminProducts));

displayProducts();

productForm.reset();

});

function deleteProduct(id){

adminProducts =
adminProducts.filter(item=>item.id!==id);

localStorage.setItem("products",
JSON.stringify(adminProducts));

displayProducts();

}