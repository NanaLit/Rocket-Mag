"use strict";
import menu from "./modules/menu";

window.addEventListener("DOMContentLoaded", () => {
  
  // SmoothScroll({
  //   // Время скролла 400 = 0.4 секунды
  //   animationTime: 700,
  //   // Размер шага в пикселях
  //   stepSize: 80,

  //   // Дополнительные настройки:

  //   // Ускорение
  //   accelerationDelta: 20,
  //   // Максимальное ускорение
  //   accelerationMax: 1,

  //   // Поддержка клавиатуры
  //   keyboardSupport: true,
  //   // Шаг скролла стрелками на клавиатуре в пикселях
  //   arrowScroll: 50,

  //   // Pulse (less tweakable)
  //   // ratio of "tail" to "acceleration"
  //   pulseAlgorithm: true,
  //   pulseScale: 4,
  //   pulseNormalize: 1,

  //   // Поддержка тачпада
  //   touchpadSupport: true,
  // });

  // if(document.querySelector('#form')) {
  //   validate('input[name="name"]', 'input[name="phone"]', 'input[name="email"]');
  //   send('#form', 'input[name="name"]', 'input[name="phone"]', 'input[name="email"]', "/mailer/mail-footer.php");

  // }
  menu();
  document.querySelector('.to-top').addEventListener('click', (e) => {
    window.scrollTo(0, 0);
  })
  const footerSlider = new Swiper('.footer__slider', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2.2,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 'auto',
    }
  }
  });
});
