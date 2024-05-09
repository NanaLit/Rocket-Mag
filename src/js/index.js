
import sliderEngine from "./modules/slider";
import video from "./modules/video";
window.addEventListener("DOMContentLoaded", () => {
    if(document.querySelectorAll('.video-card__play')) {
        const videoCardsButtons = document.querySelectorAll('.video-card__play')
        const videoWrappers = document.querySelectorAll('.video-card__wrapper')
        const videos = document.querySelectorAll('.video-card__wrapper video')
    
        video(videoCardsButtons, videoWrappers, videos);
    }
   


    if(document.querySelector('.slider .container')) {
        const slider = document.querySelector('.slider .container')
        const slides = document.querySelectorAll('.slider__item');
        const total = document.querySelector('.counter__total');
        const btns = document.querySelectorAll('.counter__btn');
        const prevBtn = document.querySelector('.counter__dec');
        const nextBtn = document.querySelector('.counter__inc');
        const current = document.querySelector('.counter__current');
        const indicators = document.createElement('ul');

        sliderEngine(slider, slides, total, btns, prevBtn, nextBtn, current, indicators, 'active', '.slider__title span', ".slider__descr span", ".slider__button", ".slider__heading p",".slider__img img", 'slider__item--active', 'counter__btn--active', 'dots', 'dots__item', 'dots__item--active')
    }
    
    if(document.querySelector('.heroes')) {
        const sliderHero = document.querySelector('.heroes')
        const slidesHero = document.querySelectorAll('.heroes__item');
        const totalHero = document.querySelector('.scors__total');
        const btnsHero = document.querySelectorAll('.scors__btn');
        const prevBtnHero = document.querySelector('.scors__dec');
        const nextBtnHero = document.querySelector('.scors__inc');
        const currentHero = document.querySelector('.scors__current');
        const indicatorsHero = document.createElement('ul');

        sliderEngine(sliderHero, slidesHero, totalHero, btnsHero, prevBtnHero, nextBtnHero, currentHero, indicatorsHero, 'activeHero', '.heroes__title p', ".heroes__descr span", ".heroes__button", ".heroes__heading p",".heroes__img img", 'heroes__item--active', 'scors__btn--active', 'dotsHero', 'dotsHero__item', 'dotsHero__item--active')
    }

    
    if(document.querySelector('.chronic')) {
        const sliderChronicle = document.querySelector('.chronic')
        const slidesChronicle = document.querySelectorAll('.chronic__item');
        const totalChronicle = document.querySelector('.numeric__total');
        const btnsChronicle = document.querySelectorAll('.numeric__btn');
        const prevBtnChronicle = document.querySelector('.numeric__dec');
        const nextBtnChronicle = document.querySelector('.numeric__inc');
        const currentChronicle = document.querySelector('.numeric__current');
        const indicatorsChronicle = document.createElement('ul');

        sliderEngine(sliderChronicle, slidesChronicle, totalChronicle, btnsChronicle, prevBtnChronicle, nextBtnChronicle, currentChronicle, indicatorsChronicle, 'activeChronicle', '.chronic__title span', ".chronic__descr span", ".chronic__button", ".chronic__heading p",".chronic__img img", 'chronic__item--active', 'numeric__btn--active', 'dotsChronic', 'dotsChronic__item', 'dotsChronic__item--active')
    }

    if(document.querySelector('.tabs')) {
        const tabSlider = new Swiper(".tabs", {
            observer: true,
            observeSlideChildren: true,
            updateOnWindowResize: true,
            touchStartPreventDefault: false,
            updateOnWindowResize: true,
            observeParents: true,
            speed: 2000,
            spaceBetween: "4%",
            mousewheel: {
                forceToAxis: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                769: {
                    slidesPerView: 3.5,
                },
            }
        });

        const tabs = document.querySelectorAll('.tabs__item');
        const contentWrappers = document.querySelectorAll('.videos__container')
        const tlToggleContent = gsap.timeline({
            defaults: {
                duration: .5,
                ease: 'power1.out'
            }
        })

        tlToggleContent.to(contentWrappers[0], {display: 'block',})
                        .to(contentWrappers[0], {opacity: 1})
                        .to(contentWrappers[1], {opacity: 0})
                        .to(contentWrappers[1], {display: "none"})

        const changeContent = (tab, i) => {
            tab.addEventListener('click', () => {
                tabs.forEach(tab => {
                    tab.classList.remove('tabs__item--active')
                })
                tab.classList.add('tabs__item--active')
                const tlToggleContent = gsap.timeline({
                    defaults: {
                        duration: .5,
                        ease: 'power1.out',
                        top: 0
                    }
                })
                if(i===0) {
                    tlToggleContent.to(contentWrappers[1], {opacity: 0})
                                    .to(contentWrappers[0], {display: 'block', duration: .1})  
                                    .to(contentWrappers[1], {display: "none", duration: .1})
                                    .to(contentWrappers[0], {opacity: 1})
                                    
                } else {
                    tlToggleContent.to(contentWrappers[0], {opacity: 0})
                                    .to(contentWrappers[1], {display: 'block',duration: .1})
                                    .to(contentWrappers[0], {display: "none", duration: .1})
                                    .to(contentWrappers[1], {opacity: 1})
                                   
                }
            })
        }
                        
        if(window.innerWidth >= 768) {
            tabs.forEach((tab, i) => {
                changeContent(tab, i)
            })
        }  else {
           
            tabSlider.on('slideChange', () => {
                tabs.forEach(tab => {
                    tab.classList.remove('tabs__item--active')
                })
                const index = tabSlider.activeIndex;
                const tlToggleContent = gsap.timeline({
                    defaults: {
                        duration: .5,
                        ease: 'power1.out',
                        top: 0
                    }
                })
                if(index===0) {
                    tlToggleContent.to(contentWrappers[1], {opacity: 0})
                                    .to(contentWrappers[0], {display: 'block', duration: .1})  
                                    .to(contentWrappers[1], {display: "none", duration: .1})
                                    .to(contentWrappers[0], {opacity: 1})
                                    
                } else {
                    tlToggleContent.to(contentWrappers[0], {opacity: 0})
                                    .to(contentWrappers[1], {display: 'block',duration: .1})
                                    .to(contentWrappers[0], {display: "none", duration: .1})
                                    .to(contentWrappers[1], {opacity: 1})
                                   
                }
            })
        } 
        

        
    }
    if(document.querySelector('.article-main__slider')) {
        const slides = document.querySelectorAll('.article-main__slider-item')
        const buttons = document.querySelectorAll('.article-counter__btn')
        const total = document.querySelector('.article-counter__total');
        const current = document.querySelector('.article-counter__current')
        function getTotalZero() {
            if (slides.length < 10) {
                total.textContent =  `0${slides.length}`;
            } else {
                total.textContent =  slides.length;
            }
        }
        getTotalZero();
        let slideIndex = 0;
        function getCurrentZero(slideIndex = 0) {
       
            if (slides.length < 10) {
                current.textContent = `0${+slideIndex + 1}`;
            } else {
                current.textContent =  +slideIndex + 1;
            }
        }
        getCurrentZero();
        const pageSlider = new Swiper(".article-main__slider", {
            observer: true,
            observeSlideChildren: true,
            updateOnWindowResize: true,
            touchStartPreventDefault: false,
            updateOnWindowResize: true,
            observeParents: true,
            speed: 600,
            spaceBetween: "4%",
            slidesPerView: 1,
            mousewheel: {
                forceToAxis: true
            },
            navigation: {
                nextEl: '.article-counter__inc',
                prevEl: '.article-counter__dec',
              },
        });
        pageSlider.on('slideChange', () => {
            let slideIndex = pageSlider.activeIndex;
            buttons.forEach(button => {
                button.classList.add('article-counter__btn--active')
                if(button.classList.contains('swiper-button-disabled')) {
                    button.classList.remove('article-counter__btn--active')
                } 
            })
            getCurrentZero(slideIndex);
        })
    }
})