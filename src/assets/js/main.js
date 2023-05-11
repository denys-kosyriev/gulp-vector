document.addEventListener('DOMContentLoaded', function () {
  //Slider section 'banners'
  new Swiper(".tariffs-internet", {
    slidesPerView: '1',
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: '2',
      },
      1024: {
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: '3',
      }
    }
  })
});
