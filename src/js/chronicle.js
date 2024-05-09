window.addEventListener("DOMContentLoaded", () => {

  if (window.innerWidth < 769) {
    const chronicleSlider = new Swiper('.chronicle__swiper', {
      // init: false,
      breakpoints: {
        // when window width is >= 320px
        
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2.2,
          spaceBetween: 40,
        }
      }
    });
  }



})