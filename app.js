let toggleBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});

closeBtn.addEventListener("click", function () {
  navLinks.classList.remove("show-links");
});

const product = document.querySelectorAll(".product-link");
const navItem = document.querySelector(".nav-links-items");

product.forEach(function () {
  const productItem = document.createElement("span");
  const items = navItem.outerHTML;
  productItem.innerHTML = items;
  productItem.classList.add("product-item");
  product[0].appendChild(productItem);
});
