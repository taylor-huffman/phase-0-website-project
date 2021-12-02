// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2);

const hamburger_menu = document.getElementById('mobile-menu-toggle');
const mobile_menu_container = document.getElementById('mobile-menu-container');
const mobile_menu_close = document.getElementById('mobile-menu-close');
const mobile_menu = document.getElementById('mobile-menu');
const body = document.querySelector('body');

hamburger_menu.addEventListener('click', function() {
    mobile_menu_container.style.visibility = "visible";
    mobile_menu_container.style.backgroundColor = "rgba(20 31 53 / 88%)";
    mobile_menu.classList.toggle('mobile-menu-open');
    body.style.overflow = "hidden";
});

mobile_menu_container.addEventListener('click', function () {
    mobile_menu_container.style.visibility = "hidden";
    mobile_menu_container.style.backgroundColor = "rgba(20 31 53 / 0%)";
    mobile_menu.classList.toggle('mobile-menu-open');
    body.style.overflow = "auto";
});