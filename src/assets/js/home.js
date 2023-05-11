document.addEventListener('DOMContentLoaded', function () {
  //Slider section 'banners'
  new Swiper(".swiper-banners", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    autoplayDelay: 3000,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

});
