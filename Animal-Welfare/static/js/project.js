function copyProjectBibTeX() {
  const citation = document.getElementById("project-bibtex");
  const button = document.querySelector(".copy-button");

  if (!citation || !button) return;

  navigator.clipboard.writeText(citation.textContent).then(function() {
    const originalText = button.textContent;
    button.textContent = "Copied";
    window.setTimeout(function() {
      button.textContent = originalText;
    }, 2000);
  });
}

document.querySelectorAll("[data-image-carousel]").forEach(function(carousel) {
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const previousButton = carousel.querySelector(".carousel-arrow-left");
  const nextButton = carousel.querySelector(".carousel-arrow-right");
  let currentIndex = 0;

  if (slides.length < 2 || !previousButton || !nextButton) return;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach(function(slide, slideIndex) {
      slide.hidden = slideIndex !== currentIndex;
    });
  }

  previousButton.addEventListener("click", function() {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", function() {
    showSlide(currentIndex + 1);
  });
});
