document.addEventListener('DOMContentLoaded', function () {

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

  //Location of tariffs
  const swiperTariffs = document.getElementsByClassName('swiper-tariffs');
  const screenWidth = window.screen.width;

  Array.from(swiperTariffs).map((swiper) => {
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


});
