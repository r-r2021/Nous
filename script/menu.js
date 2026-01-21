// Hamburger Menu Functionality

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("open");
});

// Close menu when a link is clicked
const mobileNavLinks = mobileNav.querySelectorAll("a");
mobileNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // Only prevent default for internal links to same page
        if (link.getAttribute("href") === "index.html" || link.getAttribute("href") === "#") {
            e.preventDefault();
        }
        
        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");
        
        // If it's an external navigation, let it happen
        if (link.getAttribute("href") !== "index.html" && link.getAttribute("href") !== "#") {
            setTimeout(() => {
                window.location.href = link.getAttribute("href");
            }, 300);
        }
    });
});



