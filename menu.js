document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("d-none");
        menuButton.classList.toggle("active");
    });
});

