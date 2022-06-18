//  Nav-Links

let toggleBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let navLinks = document.querySelector(".nav-links");
const linksContainer = document.querySelector(".links-container");

toggleBtn.addEventListener("click", function () {
  const navLinksHeight = navLinks.getBoundingClientRect().height;
  const LinksHeight = linksContainer.getBoundingClientRect().height;

  if (navLinksHeight === 0) {
    navLinks.style.height = `${LinksHeight}px`;
  } else {
    navLinks.style.height = 0;
  }
});

closeBtn.addEventListener("click", function () {
  navLinks.style.height = 0;
});

// Desktop Links

const product = document.querySelectorAll(".product-link");
const navItem = document.querySelector(".nav-links-items");

product.forEach(function () {
  const productItem = document.createElement("span");
  const items = navItem.outerHTML;
  productItem.innerHTML = items;
  productItem.classList.add("product-item");
  product[0].appendChild(productItem);
});
