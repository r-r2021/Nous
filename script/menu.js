// Hamburger Menu Functionality

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("open");
});


const mobileNavLinks = mobileNav.querySelectorAll("a");

mobileNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        // Only block placeholder links
        if (href === "#") {
            e.preventDefault();
        }

        // Close menu
        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");
    });
});