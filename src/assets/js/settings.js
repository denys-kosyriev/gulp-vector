document.addEventListener('DOMContentLoaded', function () {

  // Slider 'swiper-support'
  new Swiper(".swiper-settings", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      }
    }
  })

})