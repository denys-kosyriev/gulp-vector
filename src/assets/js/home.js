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

  //Show answer 'questions'
  const selects = document.getElementsByClassName('questions-select');
  const answer = document.getElementsByClassName('questions-answer');
  const iconSelect = document.getElementsByClassName('icon-select');

  for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener('click', () => {
      answer[i].classList.toggle('d-none');
      iconSelect[i].classList.toggle('open');
    })
  }

})
