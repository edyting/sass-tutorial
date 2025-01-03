const menuBtn = document.querySelector(".menu-btn");

const hamburger = document.querySelector(".menu-btn__burger");

let showMenu = false;


// listening for click event
menuBtn.addEventListener("click", toggleMenu);

const toggleMenu = () => {
    if (!showMenu) {
        hamburger.classList.add("open");

        showMenu = true;
    } else {
        hamburger.classList.remove("open");
        showMenu = false;
    }
}