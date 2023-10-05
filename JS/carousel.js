const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carouselContent = document.querySelector('.carousel-content');
const slides = document.querySelectorAll('.carousel-slide');
    
const numSlides = slides.length;
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : numSlides - 1;
    updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex < numSlides - 1) ? slideIndex + 1 : 0;
    updateSlidePosition();
});

function updateSlidePosition() {
    const slidePercentage = 100 / numSlides;
    carouselContent.style.transform = `translateX(-${slidePercentage * slideIndex}%)`;
}