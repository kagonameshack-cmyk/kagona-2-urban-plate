/* MOBILE MENU */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
navMenu.style.display =
navMenu.style.display === "flex" ? "none" : "flex";
});


/* CLOSE MENU AFTER CLICK (MOBILE) */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
if(window.innerWidth < 768){
navMenu.style.display = "none";
}
});
});


/* LIGHTBOX GALLERY */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";

lightboxImg.src = img.src;

});

});


closeLightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});


/* CLOSE LIGHTBOX WHEN CLICK OUTSIDE */

lightbox.addEventListener("click", (e) => {

if(e.target !== lightboxImg){

lightbox.style.display = "none";

}

});


/* SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const position = section.getBoundingClientRect().top;

const screenPosition = window.innerHeight / 1.3;

if(position < screenPosition){

section.style.opacity = "1";
section.style.transform = "translateY(0)";

}

});

});


/* INITIAL SECTION STYLE */

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(60px)";
section.style.transition = "all 1s";

});


/* HERO IMAGE ROTATION */

const heroImages = [

"https://images.unsplash.com/photo-1504674900247-0877df9cc836",
"https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
"https://images.unsplash.com/photo-1528605248644-14dd04022da1",
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
"https://images.unsplash.com/photo-1551218808-94e220e084d2",
"https://images.unsplash.com/photo-1552566626-52f8b828add9",
"https://images.unsplash.com/photo-1564758866819-8c02f05f5d12"
];

let heroIndex = 0;

const heroSection = document.querySelector(".hero");

setInterval(() => {

heroIndex++;

if(heroIndex >= heroImages.length){

heroIndex = 0;

}

heroSection.style.backgroundImage = `url(${heroImages[heroIndex]})`;

heroSection.style.backgroundSize = "cover";
heroSection.style.backgroundPosition = "center";

}, 5000);


/* RESERVATION FORM */

const reservationForm = document.querySelector(".reservation form");

if(reservationForm){

reservationForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your reservation request has been received.");

reservationForm.reset();

});

}


/* AUTO PLAY VIOLIN MUSIC */

const music = document.createElement("audio");

music.src = "https://cdn.pixabay.com/audio/2022/03/15/audio_9c5a5f6e69.mp3";

music.loop = true;

music.volume = 0.3;

document.body.appendChild(music);


/* PLAY AFTER USER INTERACTION */

document.addEventListener("click", () => {

music.play();

}, { once:true });
