document.addEventListener('DOMContentLoaded', function () {

  //Slider section 'tariffs'
  new Swiper(".swiper-tariffs", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
      }
    }
  })

});
