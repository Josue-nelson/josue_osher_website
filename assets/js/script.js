'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function(elements, eventType, callback) {
    for(let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * when scrolled done to 100px header will be active
 * une fois le défilement effectué jusqu'à 100 px, l'en-tête sera actif
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
   

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }

});

/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if(slideEnd) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);


/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
    if(currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
    } else {
        currentSlidePos--;
    }

    moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);


/**
 * RESPONSIVE
 */

window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
})

/*GERER ACTION DES POP-UP*/

// Récupérer les éléments
const detailLinks = document.querySelectorAll('.card-btn'); // Sélectionne tous les liens
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopup = document.getElementById('closePopup');

// Fonction pour ouvrir le pop-up
detailLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        popup.style.display = 'block'; // Affiche le pop-up
        overlay.style.display = 'block'; // Affiche l'overlay
    });
});

// Fonction pour fermer le pop-up
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Masque le pop-up
    overlay.style.display = 'none'; // Masque l'overlay
});

// Fermer le pop-up en cliquant sur l'overlay
overlay.addEventListener('click', function() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});


// ENVOIE DE MAIL
function sendEmail() {
    const message = document.getElementById('message').value;

    // Encode les données pour l'URL
    const subject = encodeURIComponent("Nouveau message de contact");
    const body = encodeURIComponent(message);

    // Crée l'URL mailto avec votre adresse email
    const mailtoLink = `mailto:Oshermindset@gmail.com?subject=${subject}&body=${body}`;

    // Ouvre le client de messagerie
    window.location.href = mailtoLink;
}
