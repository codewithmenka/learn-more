const swiper2 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true, // Adding loop option to enable infinite looping of slides
    autoplay: {
        delay: 3000, // Set the time interval (in milliseconds) between slides
    },
});