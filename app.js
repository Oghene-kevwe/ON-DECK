let toggleBtn = document.querySelector(".menu-btn")
let closeBtn = document.querySelector(".close-btn")
let navLinks = document.querySelector(".nav-links")

toggleBtn.addEventListener("click",function(){
    navLinks.classList.toggle("show-links")
})

closeBtn.addEventListener("click",function(){
    navLinks.classList.remove("show-links")
})





