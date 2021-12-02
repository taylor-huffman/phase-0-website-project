// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2);

const body = document.querySelector('body');
const hamburgerMenu = document.getElementById('mobile-menu-toggle');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopButton = document.getElementById('back-to-top-button');

hamburgerMenu.addEventListener('click', function() {
    mobileMenuContainer.style.visibility = "visible";
    mobileMenuContainer.style.backgroundColor = "rgba(20 31 53 / 88%)";
    mobileMenu.classList.toggle('mobile-menu-open');
    body.style.overflow = "hidden";
});

mobileMenuContainer.addEventListener('click', function () {
    mobileMenuContainer.style.visibility = "hidden";
    mobileMenuContainer.style.backgroundColor = "rgba(20 31 53 / 0%)";
    mobileMenu.classList.toggle('mobile-menu-open');
    body.style.overflow = "auto";
});

window.onscroll = function() {backToTop()};

function backToTop() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        // backToTopButton.style.visibility = "visible";
        backToTopButton.classList.add('back-to-top-button-show');
    } else {
        // backToTopButton.style.visibility = "hidden";
        backToTopButton.classList.remove('back-to-top-button-show');
    }
  }