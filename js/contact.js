const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  showToast("✅ Message Sent Successfully!");

  form.reset();
});
