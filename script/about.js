document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("nLoader");
  const content = document.getElementById("aboutContent");

  // Show loader for 1 second
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.remove();
      content.classList.add("visible");

      // Now initialize flashcards after content is visible
      initFlashcards();
    }, 500);
  }, 1000);
});


function initFlashcards() {
  const flashcards = document.querySelectorAll(".flashcard");
  const prevBtn = document.querySelector(".flashcard-btn.left");
  const nextBtn = document.querySelector(".flashcard-btn.right");
  let current = 0;

  function showCard(newIndex, direction) {
    if (newIndex === current) return;

    const currentCard = flashcards[current];
    const nextCard = flashcards[newIndex];

    
    currentCard.classList.remove("active");
    if (direction === "next") {
      currentCard.classList.add("exit-left");
    } else {
      currentCard.classList.add("exit-right");
    }

    
    nextCard.classList.remove("exit-left", "exit-right");
    nextCard.classList.add("active");

    current = newIndex;
  }

  prevBtn.addEventListener("click", () => {
    const newIndex = current === 0 ? flashcards.length - 1 : current - 1;
    showCard(newIndex, "prev");
  });

  nextBtn.addEventListener("click", () => {
    const newIndex = current === flashcards.length - 1 ? 0 : current + 1;
    showCard(newIndex, "next");
  });

  // Initial display
  flashcards.forEach((card, i) => {
    if (i === 0) card.classList.add("active");
    else card.classList.remove("active", "exit-left", "exit-right");
  });
}
