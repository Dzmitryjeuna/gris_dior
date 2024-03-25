// const chooseColor = document.querySelectorAll('.color__item');
// const contentItem = document.querySelectorAll('.content-item');

// chooseColor.forEach(function(element) {
//   element.addEventListener('click', open)
// });

const swiperHero = new Swiper('.hero__swiper', {
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 3,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});