document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (this.textContent.includes("Ver Ejemplo")) {
      e.preventDefault();
      alert("Ejemplo disponible - Contacta para más información");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card-hover").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});
