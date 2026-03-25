/* MOBILE MENU TOGGLE */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if(menuToggle){
menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
}


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});
});


/* HERO IMAGE SLIDER */

const hero = document.querySelector(".hero");

const heroImages = [

"https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
"https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
"https://images.unsplash.com/photo-1559339352-11d035aa65de",
"https://images.unsplash.com/photo-1504674900247-0877df9cc836",
"https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
"https://images.unsplash.com/photo-1559847844-d721426d6edc",
"https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
"https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"

];

let heroIndex = 0;

function changeHero(){

hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;

heroIndex++;

if(heroIndex >= heroImages.length){
heroIndex = 0;
}

}

setInterval(changeHero,5000);


/* IMAGE LIGHTBOX */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

image.addEventListener("click", () => {

lightbox.classList.add("active");

const img = document.createElement("img");
img.src = image.src;

while(lightbox.firstChild){
lightbox.removeChild(lightbox.firstChild);
}

lightbox.appendChild(img);

});

});


lightbox.addEventListener("click", () => {
lightbox.classList.remove("active");
});


/* SCROLL FADE IN ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const position = section.getBoundingClientRect().top;

const screenPosition = window.innerHeight / 1.2;

if(position < screenPosition){
section.classList.add("visible");
}

});

});


/* NAVBAR SHADOW ON SCROLL */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.6)";

}else{

navbar.style.boxShadow = "none";

}

});
