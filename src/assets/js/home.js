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

  Array.from(selects).map((select, index) => {
    document.addEventListener('click', (e) => {
      const closeAnswer = e.composedPath().includes(select);
      if (!closeAnswer) {
        answer[index].classList.add('d-none');
        iconSelect[index].classList.remove('open');
      } else if (closeAnswer) {
        answer[index].classList.toggle('d-none');
        iconSelect[index].classList.toggle('open');
      }
    })
  })

})
