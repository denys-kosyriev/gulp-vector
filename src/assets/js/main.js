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
    const swiperWrapper = swiper.querySelector('.swiper-wrapper');
    const swiperSlide = swiper.getElementsByClassName('swiper-slide');
    const swiperButtonPrev = swiper.querySelector('.swiper-button-prev');
    const swiperButtonNext = swiper.querySelector('.swiper-button-next');
    if ((swiperSlide.length === 2 && screenWidth > 1439) ||
      (swiperSlide.length === 1 && screenWidth > 767)) {
      swiperWrapper.classList.add('center')
    } else if ((swiperSlide.length === 2 && screenWidth < 1440) ||
      (screenWidth < 768)) {
      swiperWrapper.classList.remove('center')
    } else if (swiperSlide.length > 3 && screenWidth > 1439) {
      swiperButtonPrev.classList.remove('d-none');
      swiperButtonNext.classList.remove('d-none');
    }
  })

});
