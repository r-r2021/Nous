function startTypewriter() {
    const typewriters = document.querySelectorAll(".typewriter");

    typewriters.forEach(el => {
        const text = el.dataset.text;
        el.textContent = "";

        const cursor = document.createElement("span");
        cursor.classList.add("cursor");
        cursor.textContent = "|";
        el.appendChild(cursor);

        let i = 0;

        function type() {
            if (i < text.length) {
                const span = document.createElement("span");
                span.textContent = text[i];
                el.insertBefore(span, cursor);
                i++;
                setTimeout(type, 50);
            } else {
                // typing finished
                cursor.remove();

                // ✅ CORRECT way to find the button
                const articleText = el.closest(".article-text");
                if (!articleText) return;

                const button = articleText.querySelector(".read-more");
                if (button) {
                    requestAnimationFrame(() => {
                        button.classList.add("visible");
                    });
                }
            }
        }

        type();
    });
}

// Start AFTER loading animation
setTimeout(startTypewriter, 3200);