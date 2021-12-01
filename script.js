// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2);

const hamburger_menu = document.getElementById('mobile-menu-toggle');
const mobile_menu_container = document.getElementById('mobile-menu-container');
const mobile_menu_close = document.getElementById('mobile-menu-close');
const body = document.querySelector('body');

hamburger_menu.addEventListener('click', function() {
    // alert('I was clicked!');
    mobile_menu_container.style.display = "block";
    mobile_menu_container.style.backgroundColor = "rgba(0 0 0 / 75%)";
    body.style.overflow = "hidden";
});

mobile_menu_container.addEventListener('click', function () {
    mobile_menu_container.style.display = "none";
    mobile_menu_container.style.backgroundColor = "rgba(0 0 0 / 0%)"
    body.style.overflow = "auto";
});