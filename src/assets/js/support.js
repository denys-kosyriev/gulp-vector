document.addEventListener('DOMContentLoaded', function () {

  // Slider 'swiper-support'
  new Swiper(".swiper-support", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      567: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      }
    }
  })

})