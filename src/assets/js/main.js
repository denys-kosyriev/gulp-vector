document.addEventListener('DOMContentLoaded', function () {

  // Languages list 'header'
  const language = document.getElementsByClassName('language')[0];
  const languageName = document.getElementsByClassName('language-name')[0];
  const languagesList = document.getElementsByClassName('languages-list')[0];
  const languagesListLanguage = document.getElementsByClassName('languages-list-language');

  document.addEventListener('click', (e) => {
    const closeLanguagesList = e.composedPath().includes(language);
    if (!closeLanguagesList) {
      languagesList.classList.add('d-none');
    } else if (closeLanguagesList) {
      languagesList.classList.toggle('d-none');
    }
  })

  Array.from(languagesListLanguage).map(languageItem => {
    languageItem.addEventListener('click', () => {
      languageName.innerHTML = languageItem.innerHTML;
      Array.from(languagesListLanguage).map(item => {
        item.classList.remove('active');
      });
      if (languageName.innerHTML === languageItem.innerHTML) {
        languageItem.classList.add('active');
      }
    })
  })

  // Position of tariffs and position of pagination tariffs
  const tariffsSlider = document.getElementsByClassName('tariffs-slider');
  const screenWidth = window.screen.width;

  Array.from(tariffsSlider).map((swiper) => {
    const wrapper = swiper.querySelector('.swiper-wrapper');
    const slide = swiper.getElementsByClassName('swiper-slide');
    const buttonPrev = swiper.querySelector('.swiper-button-prev');
    const buttonNext = swiper.querySelector('.swiper-button-next');
    if ((slide.length === 2 && screenWidth > 1439) ||
      (slide.length === 1 && screenWidth > 767)) {
      wrapper.classList.add('center');
    } else if (slide.length > 3 && screenWidth > 1439) {
      buttonPrev.classList.remove('d-none');
      buttonNext.classList.remove('d-none');
    }

    if ((slide.length === 1) ||
      (slide.length === 2 && screenWidth > 767) ||
      (slide.length === 3 && screenWidth > 1439)) {
      wrapper.classList.add('without-pagination');
    }
  })

  // Show the current year
  const currentYear = new Date;
  document.getElementsByClassName('currentYear')[0].textContent = `${currentYear.getFullYear()}`;

  // Slider 'tariffs-slider'
  if (document.getElementsByClassName('tariffs-slider')[0]) {
    new Swiper(".tariffs-slider", {
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
        1440: {
          slidesPerView: 3,
        }
      }
    })
  }

  // Work accordion
  const questionsList = document.getElementsByClassName('questions-list')[0];
  const questionsSelects = document.getElementsByClassName('questions-select');
  const questionsAnswer = document.getElementsByClassName('questions-answer');
  const questionsIconSelect = document.getElementsByClassName('icon-select');
  const question = document.getElementsByClassName('question');

  Array.from(questionsSelects).map((select, index) => {
    document.addEventListener('click', (e) => {
      const closeAnswer = e.composedPath().includes(questionsList);
      const clickSQuestion = e.composedPath().includes(question[index]);
      if (!closeAnswer) {
        questionsAnswer[index].classList.add('d-none');
        questionsIconSelect[index].classList.remove('open');
      } else if (clickSQuestion) {
        questionsAnswer[index].classList.toggle('d-none');
        questionsIconSelect[index].classList.toggle('open');
      }
      question[index].classList.remove('active');
      console.log(!questionsAnswer[index].className.includes('d-none'))
      if (!questionsAnswer[index].className.includes('d-none')) {
        question[index].classList.add('active');
      }
    })
  })

  // Work tariffs

  const modals = document.getElementsByClassName('modal');
  const tariffs = document.getElementsByClassName('tariff');
  const modalForm = document.getElementsByClassName('modal-form')[0];

  Array.from(tariffs).map((tariff) => {

    const connectionButton = tariff.getElementsByClassName('btn')[0];
    connectionButton.addEventListener('click', () => {
      if (tariff.className.includes('tariff-internet')) {
        modalForm.classList.remove('d-none');
      } else if (tariff.className.includes('tariff-tv')) {
        modalForm.classList.remove('d-none');
        modalForm.classList.add('modal-tv');
      } else if (tariff.className.includes('tariff-all')) {
        modalForm.classList.remove('d-none');
        modalForm.classList.add('modal-all');
      }
    })

    const modalChannels = document.getElementsByClassName('modal-channels')[0];
    const detail = tariff.getElementsByClassName('detail');
    if (detail) {
      detail.addEventListener('click', () => {
        modalChannels.classList.remove('d-none');
      })
    }
    const infoBtn = tariff.getElementsByClassName('info')[0];
    const modalInfo = tariff.getElementsByClassName('modal-net-info')[0];
    infoBtn.addEventListener('click', () => {
      modalInfo.classList.remove('d-none');
      const timeShowModalInfo = setTimeout(() => {
        modalInfo.classList.add('d-none');
      }, 3000)
      modalInfo.addEventListener('click', () => {
        clearTimeout(timeShowModalInfo)
        modalInfo.classList.add('d-none');
      });
    })

  })

  Array.from(modals).map((modal, index) => {
    const closeButton = document.getElementsByClassName('close-modal')[index];
    const modalContent = document.getElementsByClassName('modal-content')[index];
    closeButton.addEventListener('click', () => {
      modal.classList.add('d-none');
    })
    modal.addEventListener('click', (e) => {
      const closeModal = e.composedPath().includes(modalContent);
      if (!closeModal) {
        modal.classList.add('d-none');
      }
    })
  })

});
