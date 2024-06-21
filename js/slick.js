// scripts.js
$(document).ready(function () {
  const slides = $(".slides_one");
  const slideCount = $(".slide_one").length;
  let currentIndex = 0;

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
  }

  function updateSlidePosition() {
    const newLeft = -currentIndex * 100 + "%";
    slides.css("transform", "translateX(" + newLeft + ")");
  }

  setInterval(goToNextSlide, 3000); // Muda de slide a cada 3 segundos
});

$(document).ready(function () {
  const slides = $(".slides_two");
  const slideCount = $(".slide_two").length;
  let currentIndex = 0;

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
  }

  function updateSlidePosition() {
    const newLeft = -currentIndex * 100 + "%";
    slides.css("transform", "translateX(" + newLeft + ")");
  }

  setInterval(goToNextSlide, 3000); // Muda de slide a cada 3 segundos
});
