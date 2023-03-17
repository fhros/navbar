//nappi variablet jee jee

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links")

//nappi

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
});