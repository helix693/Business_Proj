// Carousel functionality for index.html

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    const total = images.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * images[0].clientWidth}px)`;
    }

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % total;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
