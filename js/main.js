

const collapsibles = document.querySelectorAll(".collapsible");
const titulo = document.querySelector(".titulos-principales");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    
    if (this.classList.contains("collapsible--expanded")) {
      // Si el elemento está expandido, oculta el título
      titulo.style.display = "none";
    } else {
      // Si el elemento no está expandido, muestra el título nuevamente
      titulo.style.display = "block"; // O el valor de display que sea apropiado para tu diseño
    }
  })
);
