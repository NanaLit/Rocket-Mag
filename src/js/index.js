
import sliderEngine from "./modules/slider";
window.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.slider .container')
    const slides = document.querySelectorAll('.slider__item');
    const total = document.querySelector('.counter__total');
    const btns = document.querySelectorAll('.counter__btn');
    const prevBtn = document.querySelector('.counter__dec');
    const nextBtn = document.querySelector('.counter__inc');
    const current = document.querySelector('.counter__current');
    const indicators = document.createElement('ul');

    sliderEngine(slider, slides, total, btns, prevBtn, nextBtn, current, indicators, 'active', '.slider__title span', ".slider__descr span", ".slider__button", ".slider__heading p",".slider__img img", 'slider__item--active', 'counter__btn--active', 'dots', 'dots__item', 'dots__item--active')


    const sliderHero = document.querySelector('.heroes')
    const slidesHero = document.querySelectorAll('.heroes__item');
    const totalHero = document.querySelector('.scors__total');
    const btnsHero = document.querySelectorAll('.scors__btn');
    const prevBtnHero = document.querySelector('.scors__dec');
    const nextBtnHero = document.querySelector('.scors__inc');
    const currentHero = document.querySelector('.scors__current');
    const indicatorsHero = document.createElement('ul');

    sliderEngine(sliderHero, slidesHero, totalHero, btnsHero, prevBtnHero, nextBtnHero, currentHero, indicatorsHero, 'activeHero', '.heroes__title p', ".heroes__descr span", ".heroes__button", ".heroes__heading p",".heroes__img img", 'heroes__item--active', 'scors__btn--active', 'dotsHero', 'dotsHero__item', 'dotsHero__item--active')
})