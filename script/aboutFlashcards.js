document.addEventListener("DOMContentLoaded", () => {
  const flashcards = document.querySelectorAll(".flashcard");
  const prevBtn = document.querySelector(".flashcard-btn.left");
  const nextBtn = document.querySelector(".flashcard-btn.right");
  let current = 0;

  function showCard(index, direction) {
    flashcards.forEach((card, i) => {
      card.classList.remove("active", "exit-left", "exit-right");

      if (i < current) card.classList.add("exit-left");
      if (i > current) card.classList.add("exit-right");
    });

    const card = flashcards[index];
    card.classList.add("active");

    // animates previous card out
    if (direction === "next" && current !== index) {
      flashcards[current].classList.add("exit-left");
    } else if (direction === "prev" && current !== index) {
      flashcards[current].classList.add("exit-right");
    }

    current = index;
  }

  prevBtn.addEventListener("click", () => {
    const newIndex = current === 0 ? flashcards.length - 1 : current - 1;
    showCard(newIndex, "prev");
  });

  nextBtn.addEventListener("click", () => {
    const newIndex = current === flashcards.length - 1 ? 0 : current + 1;
    showCard(newIndex, "next");
  });

  // initial display
  showCard(0);
});