document.addEventListener('DOMContentLoaded', function () {

  // Slider section 'banners'
  new Swiper(".swiper-banners", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 800,
    autoplayDelay: 3000,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  // Show answer 'questions'
  const questionsList = document.getElementsByClassName('questions-list')[0];
  const questionsSelects = document.getElementsByClassName('questions-select');
  const questionsAnswer = document.getElementsByClassName('questions-answer');
  const questionsIconSelect = document.getElementsByClassName('icon-select');

  Array.from(questionsSelects).map((select, index) => {
    document.addEventListener('click', (e) => {
      const closeAnswer = e.composedPath().includes(questionsList);
      const clickSelect = e.composedPath().includes(select);
      if (!closeAnswer) {
        questionsAnswer[index].classList.add('d-none');
        questionsIconSelect[index].classList.remove('open');
      } else if (clickSelect) {
        questionsAnswer[index].classList.toggle('d-none');
        questionsIconSelect[index].classList.toggle('open');
      }
    })
  })

})
