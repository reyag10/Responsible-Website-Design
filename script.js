let navbar = document.querySelector("nav");
let menuLink = document.getElementById("menu-links");

function toggleMenu(){
    menuLink.classList.toggle("show-menu");
}

window.onscroll = function() {
    if(window.scrollY > 0){
        navbar.style.background = "#eefff9";
    }
    else{
        navbar.style.background = "transparent";
    }
}