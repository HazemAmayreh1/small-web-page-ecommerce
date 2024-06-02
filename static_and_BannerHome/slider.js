document.addEventListener('DOMContentLoaded', function() {
    const sliderSlides = document.querySelectorAll('.slider-slide');
    const totalSliderSlides = sliderSlides.length;
    let currentSliderIndex = 0;

    function showSliderSlide(index) {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        sliderWrapper.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    function nextSliderSlide() {
        currentSliderIndex = (currentSliderIndex + 1) % totalSliderSlides;
        showSliderSlide(currentSliderIndex);
    }

    setInterval(nextSliderSlide, 3000);
    showSliderSlide(currentSliderIndex);
});

// Slider functionality for swiper-container
document.addEventListener('DOMContentLoaded', function() {
    const swiperSlides = document.querySelectorAll('.swiper-slide');
    const totalSwiperSlides = swiperSlides.length;
    let currentSwiperIndex = 0;

    function showSwiperSlide(index) {
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        swiperWrapper.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    function nextSwiperSlide() {
        currentSwiperIndex = (currentSwiperIndex + 1) % totalSwiperSlides;
        showSwiperSlide(currentSwiperIndex);
    }

    setInterval(nextSwiperSlide, 3000);
    showSwiperSlide(currentSwiperIndex);
});