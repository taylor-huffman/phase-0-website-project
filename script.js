// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2);

const body = document.querySelector('body');
const hamburgerMenu = document.getElementById('mobile-menu-toggle');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopButton = document.getElementById('back-to-top-button');
const viewMoreButton = document.getElementById('view-more-button');
const viewMoreButtonA = document.querySelector('#view-more-button a');
const recentProjectsViewMoreSection = document.getElementById('recent-projects-view-more');


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

viewMoreButton.addEventListener('click', function () {
    if (viewMoreButtonA.innerHTML == "View More") {
        // recentProjectsViewMoreSection.scrollTo(0);
        recentProjectsViewMoreSection.classList.add('recent-projects-view-more-show');
        viewMoreButtonA.innerHTML = "View Less";
        viewMoreButtonA.setAttribute("href", "#recent-projects-view-more");
    } else {
        recentProjectsViewMoreSection.classList.remove('recent-projects-view-more-show');
        viewMoreButtonA.innerHTML = "View More";
        viewMoreButtonA.setAttribute("href", "#recent-projects");
    }
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