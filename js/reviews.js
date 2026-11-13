const reviews = [

{
name:"Sarah Johnson",
image:"https://randomuser.me/api/portraits/women/32.jpg",
text:"Amazing shopping experience! The products are excellent and delivery was very fast.",
stars:"⭐⭐⭐⭐⭐"
},

{
name:"David Miller",
image:"https://randomuser.me/api/portraits/men/45.jpg",
text:"Excellent customer support. Highly recommended.",
stars:"⭐⭐⭐⭐⭐"
},

{
name:"Emily Brown",
image:"https://randomuser.me/api/portraits/women/56.jpg",
text:"The quality exceeded my expectations. I will definitely shop again.",
stars:"⭐⭐⭐⭐⭐"
},

{
name:"James Wilson",
image:"https://randomuser.me/api/portraits/men/22.jpg",
text:"Affordable prices and premium quality products.",
stars:"⭐⭐⭐⭐⭐"
}

];

let currentReview = 0;

function showReview(index){

document.getElementById("reviewImage").src =
reviews[index].image;

document.getElementById("reviewName").textContent =
reviews[index].name;

document.getElementById("reviewText").textContent =
reviews[index].text;

document.getElementById("reviewStars").textContent =
reviews[index].stars;

}

document.getElementById("nextReview")
.addEventListener("click",()=>{

currentReview++;

if(currentReview>=reviews.length){

currentReview=0;

}

showReview(currentReview);

});

document.getElementById("prevReview")
.addEventListener("click",()=>{

currentReview--;

if(currentReview<0){

currentReview=reviews.length-1;

}

showReview(currentReview);

});

setInterval(()=>{

currentReview++;

if(currentReview>=reviews.length){

currentReview=0;

}

showReview(currentReview);

},4000);

showReview(currentReview);