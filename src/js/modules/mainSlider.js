const mainSlider = () => {
    const slider = document.querySelector('.slider .container')
    const slides = document.querySelectorAll('.slider__item');
    const total = document.querySelector('.counter__total');
    const btns = document.querySelectorAll('.counter__btn');
    const prevBtn = document.querySelector('.counter__dec');
    const nextBtn = document.querySelector('.counter__inc');
    const current = document.querySelector('.counter__current');
    const indicators = document.createElement('ul');

    let dots = [];
    indicators.classList.add('dots');
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dots__item');

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
   


    

    let mm = gsap.matchMedia();
    mm.add({
    isMobile: "(max-width: 768px)",
    isDesktop: "(min-width: 769px)"
    }, (context) => {
    let { isMobile, isDesktop } = context.conditions;
        localStorage.setItem('active', 0);
        let activeSlide;
        activeSlide = localStorage.getItem('active')
        
        function getCurrentZero() {
            let slideIndex;
            slideIndex = localStorage.getItem('active')
            if (slides.length < 10) {
                current.textContent = `0${+slideIndex + 1}`;
            } else {
                current.textContent =  +slideIndex + 1;
            }
        }
        function getTotalZero() {
            if (slides.length < 10) {
                total.textContent =  `0${slides.length}`;
            } else {
                total.textContent =  slides.length;
            }
        }
        function changeSlides()  {
            
            const toggleTitle = gsap.to('.slider__title span', {
                paused: true,
                y: isMobile ? 65 : 150,
                duration: .5,
                ease: 'power1.out'
            })
            const toggleContent = gsap.to('.slider__descr span', {
                paused: true,
                y: isMobile ? 65 : 150,
                duration: .5,
                ease: 'power1.out'
            })
            const toggleButton = gsap.to('.slider__button', {
                paused: true,
                y: isMobile ? 75 : 150,
                duration: .5,
                ease: 'power1.out'
            })
            const toggleCounter = gsap.to('.counter__current', {
                paused: true,
                y: isMobile ? 30 :150,
                duration: .5,
                ease: 'power1.out'
            })
            const toggleHeading = gsap.to('.slider__heading span', {
                paused: true,
                y: 200,
                duration: .5,
                ease: 'power1.out'
            })
            const toggleImg = gsap.to('.slider__img img', {
                paused: true,
                y: isMobile ? 400 : 630,
                duration: .5,
                ease: 'power1.out'
            })
            activeSlide = localStorage.getItem('active')
            btns.forEach(btn => {
                btn.setAttribute('disabled', true)
            })
            dots.forEach((dot => {
                dot.setAttribute('disabled', true)
            }))
            slides.forEach((slide, i) => {
                toggleTitle.play()
                toggleContent.play()
                toggleButton.play()
                toggleHeading.play()
                toggleCounter.play()
                toggleImg.play()
            })
            setTimeout(() => {
                getCurrentZero();
                getTotalZero();
                slides.forEach((slide, i) => {
                    slide.classList.remove('slider__item--active')
                })
            
                slides[activeSlide].classList.add('slider__item--active')
                toggleTitle.reverse()
                toggleContent.reverse()
                toggleButton.reverse()
                toggleHeading.reverse()
                toggleCounter.reverse()
                toggleImg.reverse()
                setTimeout(() => {
                    btns.forEach(btn => {
                        btn.removeAttribute('disabled')
                    },)
                    dots.forEach((dot => {
                        dot.removeAttribute('disabled')
                    }))
                }, 500)
            
            }, 700)
            changeActiveDots();
            changeActiveBtn();
        }

        const changeActiveDots = () => {
            if(window.innerWidth >= 768) {
                dots.forEach(dot => {
                    dot.classList.remove('dots__item--active')
                })
                dots[activeSlide].classList.add('dots__item--active');
            }
        }
        const changeActiveBtn = () => {
            if(+activeSlide === slides.length-1) {
                nextBtn.classList.remove('counter__btn--active');
                prevBtn.classList.contains('counter__btn--active') ? null : prevBtn.classList.add('counter__btn--active')
            } else if(+activeSlide === 0) {
                prevBtn.classList.remove('counter__btn--active');
                nextBtn.classList.contains('counter__btn--active') ? null : nextBtn.classList.add('counter__btn--active')
            } else {
                prevBtn.classList.contains('counter__btn--active') ? null : prevBtn.classList.add('counter__btn--active')
                nextBtn.classList.contains('counter__btn--active') ? null : nextBtn.classList.add('counter__btn--active')
            }
        }
    
        const autoStorage = () => {
            if(+localStorage.getItem('active') < slides.length-1) {
                let current = +localStorage.getItem('active') + 1
                localStorage.setItem('active', current);
             } else {
                 localStorage.setItem('active', 0);
             }
        }
    
        changeSlides();
    
        let refreshLocalStorage
    
        refreshLocalStorage = setInterval( () => { autoStorage() }, 7999);
    
        let refreshIntervalId
        refreshIntervalId = setInterval( () => {changeSlides()},8000);
    
    
    
        dots.forEach((dot, i) => {
            dot.addEventListener('click',  () => {
                clearInterval(refreshLocalStorage)
                clearInterval(refreshIntervalId)
                localStorage.setItem('active', i)
                activeSlide = localStorage.getItem('active')
                changeSlides()
                refreshLocalStorage = setInterval( () => { autoStorage() }, 7999);
                refreshIntervalId = setInterval( () => {changeSlides()},8000);
            })
        })
    
        nextBtn.addEventListener('click', () => {
            clearInterval(refreshLocalStorage)
            clearInterval(refreshIntervalId)
            activeSlide = +localStorage.getItem('active') + 1;
            localStorage.setItem('active', activeSlide)
            changeSlides();
            refreshLocalStorage = setInterval( () => { autoStorage() }, 7999);
            refreshIntervalId = setInterval( () => {changeSlides()},8000);
    
        })
    
        prevBtn.addEventListener('click', () => {
            clearInterval(refreshLocalStorage)
            clearInterval(refreshIntervalId)
            activeSlide = +localStorage.getItem('active') - 1;
            localStorage.setItem('active', activeSlide)
            changeSlides();
            refreshLocalStorage = setInterval( () => { autoStorage() }, 7999);
            refreshIntervalId = setInterval( () => {changeSlides()},8000);
    
        })
    })
   
    
}
module.exports = mainSlider;