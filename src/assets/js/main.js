document.addEventListener('DOMContentLoaded', function () {
  //Slider section 'banners'
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

  //Show languages list 'header'
  const language = document.getElementsByClassName('language')[0];
  const languageName = document.getElementsByClassName('language-name')[0];
  const languagesList = document.getElementsByClassName('languages-list')[0];
  const languagesListLanguage = document.getElementsByClassName('languages-list-language');

  language.addEventListener('click', () => {
    languagesList.classList.toggle('d-none');
  })

  for (let i = 0; i < languagesListLanguage.length; i++) {
    languagesListLanguage[i].addEventListener('click', () => {
      language.classList.add('d-none');
      console.log(languagesListLanguage[i].innerHTML)
      languageName.innerHTML = languagesListLanguage[i].innerHTML;
    })
  }

});
