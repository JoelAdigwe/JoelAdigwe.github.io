
// let hambElem = document.getElementById ("hamburger");
// hambElem.addEventListener("click", toggleMenu);

function toggleMenu() {
    console.log("clicked")
    let mobileMenuElem = document.getElementById("mob-menu");
    mobileMenuElem.classList.toggle("show-menu");
}