window.addEventListener("DOMContentLoaded", () => {

  const chronicleSlider = new Swiper('.chronicle__swiper', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
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
})