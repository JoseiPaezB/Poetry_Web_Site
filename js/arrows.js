const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider > *");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[slideIndex].style.display = "block";
}

function updateButtonVisibility() {
  if (currentSlide === 0) {
    prevButton.style.display = "none";
    nextButton.style.display = "block";
  } else if (currentSlide === slides.length - 1) {
    prevButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  }
}

function prevSlide() {
  currentSlide = Math.max(currentSlide - 1, 0);
  showSlide(currentSlide);
  updateButtonVisibility();
}

function nextSlide() {
  currentSlide = Math.min(currentSlide + 1, slides.length - 1);
  showSlide(currentSlide);
  updateButtonVisibility();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

    

showSlide(currentSlide);
updateButtonVisibility();