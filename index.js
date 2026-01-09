
 const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

// Show the first slide initially

function showSlide(index) {
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
