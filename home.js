let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

// Function to update the slide position
function updateSlidePosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to go to the next slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Function to go to the previous slide
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Auto-slide every 3 seconds
let slideInterval = setInterval(showNextSlide, 3000);

// Event listener for the "next" button
document.getElementById('next').addEventListener('click', function () {
    clearInterval(slideInterval); // Stop auto-slide
    showNextSlide();
    slideInterval = setInterval(showNextSlide, 3000); // Restart auto-slide
});

// Event listener for the "prev" button
document.getElementById('prev').addEventListener('click', function () {
    clearInterval(slideInterval); // Stop auto-slide
    showPrevSlide();
    slideInterval = setInterval(showNextSlide, 3000); // Restart auto-slide
});

// Initialize the slider
updateSlidePosition();
