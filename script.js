let slideIndex = 0; 
const totalSlides = document.querySelectorAll('.slide-box').length;
const slidesToShow = 3; 
const slideContainer = document.querySelector('.slide');

function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const slideBoxWidth = slides.children[0].offsetWidth + 20; // Width of each slide including padding/margin
    const maxIndex = totalSlides - slidesToShow; // Max index for slide movement

    // Update the slideIndex based on the direction (n)
    slideIndex += n;

    // Ensure slideIndex stays within bounds
    if (slideIndex < 0) {
        slideIndex = 0;
    } else if (slideIndex > maxIndex) {
        slideIndex = maxIndex;
    }

    // Apply the transform to slide the images
    slides.style.transform = `translateX(${-slideIndex * slideBoxWidth}px)`;
}

function showLogin() {
    window.location.href = "login.html";
}

function showSignup() {
    window.location.href = "signup.html";
}
