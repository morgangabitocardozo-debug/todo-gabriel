const cards = document.querySelectorAll(".site-card");

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    card.style.setProperty("--glow-x", `${x}%`);
    card.style.setProperty("--glow-y", `${y}%`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "48%");
  });
});
