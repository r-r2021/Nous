window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("nLoader");
    const content = document.getElementById("aboutContent");

    // Keep N visible for 1s
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            loader.remove();
            content.classList.add("visible");
        }, 500);
    }, 1000);
});