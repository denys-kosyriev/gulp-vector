document.addEventListener('DOMContentLoaded', function () {
  //Slider section 'tariffs'
  new Swiper(".tariffs-internet", {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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

  //Location of tariffs
  const tariffsWrappers = document.getElementsByClassName('tariffs-wrapper');
  const screenWidth = window.screen.width;

  Array.from(tariffsWrappers).map((wrapper) => {
    const swiperSlideTariffs = wrapper.getElementsByClassName('swiper-slide');
    if (swiperSlideTariffs.length === 2 && screenWidth > 1399) {
      wrapper.classList.add('center')
    } else if (swiperSlideTariffs.length === 1 && screenWidth > 767) {
      wrapper.classList.add('center')
    }
  })

  //Show languages list 'header'
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
    })
  })

});
