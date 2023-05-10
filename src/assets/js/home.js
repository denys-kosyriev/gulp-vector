document.addEventListener('DOMContentLoaded', function () {
  //Slider section 'banners'
  new Swiper(".swiper-banners", {
    slidesPerView: '1',
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
    // breakpoints: {
    //   768: {
    //     spaceBetween: 24,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       type: 'fraction',
    //     },
    //   }
    // }
  })

});
