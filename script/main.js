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
                el.insertBefore(span, cursor); // insert before cursor
                i++;
                setTimeout(type, 50);
            } else {
                cursor.remove(); 
            }
        }

        type();
    });
}

setTimeout(() => {
    startTypewriter();
}, 3200);