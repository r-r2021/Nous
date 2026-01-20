function startTypewriter() {
    const typewriters = document.querySelectorAll(".typewriter");

    typewriters.forEach(el => {
        const text = el.getAttribute("data-text");
        let i = 0;

        const cursor = el.style.borderRight; // keep border for cursor

        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            } else {
                // Stop cursor after typing
                el.style.borderRight = "none";
            }
        }

        type();
    });
}

// Run typewriter after loading animation
setTimeout(() => {
    startTypewriter();
}, 3200); // match your loading screen duration