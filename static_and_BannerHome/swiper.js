var slider = new Swiper('.slider-container', {
    slidesPerView: 1, // Display one slide at a time
    spaceBetween: 0, // No space between slides
    autoplay: {
        delay: 5000, // Autoplay delay in milliseconds (5 seconds)
        disableOnInteraction: false, // Autoplay still works when user interacts with swiper
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allow pagination bullets to be clickable
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});