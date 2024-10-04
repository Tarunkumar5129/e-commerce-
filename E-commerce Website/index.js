var manu = document.querySelector(".manu");
var navbar=document.querySelector(".navbar");
var menu = document.querySelector(".menu");
manu.addEventListener("click",function () {
    navbar.classList.add("active");
});
menu.addEventListener("click",function () {
    navbar.classList.remove("active");
});

