const sliderEngine = (slider, slides, total, btns, prevBtn, nextBtn, current, indicators, storageName, titleHide, descrHide, buttonHide, headingHide, imgHide, activeSliderClass, btnActiveClass, dotsContainer, dotsItemClass, dotsItemActiveClass) => {
    let dots = [];
    indicators.classList.add(dotsContainer);
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add(dotsItemClass);

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
   
        localStorage.setItem(storageName, 0);
        let activeSlide;
        activeSlide = localStorage.getItem(storageName)
        
        function getCurrentZero() {
            let slideIndex;
            slideIndex = localStorage.getItem(storageName)
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

            const tlToggleContent = gsap.timeline({
                defaults: {
                    duration: .4,
                    ease: 'power1.out'
                }
            })
            
            activeSlide = localStorage.getItem(storageName)
            btns.forEach(btn => {
                btn.setAttribute('disabled', true)
            })
            dots.forEach((dot => {
                dot.setAttribute('disabled', true)
            }))
            slides.forEach((slide, i) => {
                tlToggleContent.to(titleHide, {y: "101%"})
                                .to(descrHide, {y: "101%"}, "<0")
                                .to(current, {y: "101%"}, "<0")
                                .to(headingHide, {y: "101%"}, "<0")
                                .to(imgHide, {y: "101%"}, "<0")


            })
            getCurrentZero();
            getTotalZero();
            slides.forEach((slide, i) => {
                slide.classList.remove(activeSliderClass)
            })
        
            slides[activeSlide].classList.add(activeSliderClass)

            tlToggleContent.to(titleHide, {y: 0})
                            .to(descrHide, {y: 0}, "<0")
                            .to(current, {y: 0}, "<0")
                            .to(headingHide, {y: 0}, "<0")
                            .to(imgHide, {y: 0}, "<0")
            btns.forEach(btn => {
                btn.removeAttribute('disabled')
            },)
            dots.forEach((dot => {
                dot.removeAttribute('disabled')
            }))
            changeActiveDots();
            changeActiveBtn();
        }

        const changeActiveDots = () => {
            dots.forEach(dot => {
                dot.classList.remove(dotsItemActiveClass)
            })
            dots[activeSlide].classList.add(dotsItemActiveClass);
        }
        const changeActiveBtn = () => {
            if(+activeSlide === slides.length-1) {
                nextBtn.classList.remove(btnActiveClass);
                prevBtn.classList.contains(btnActiveClass) ? null : prevBtn.classList.add(btnActiveClass)
            } else if(+activeSlide === 0) {
                prevBtn.classList.remove(btnActiveClass);
                nextBtn.classList.contains(btnActiveClass) ? null : nextBtn.classList.add(btnActiveClass)
            } else {
                prevBtn.classList.contains(btnActiveClass) ? null : prevBtn.classList.add(btnActiveClass)
                nextBtn.classList.contains(btnActiveClass) ? null : nextBtn.classList.add(btnActiveClass)
            }
        }
    
        const autoStorage = () => {
            if(+localStorage.getItem(storageName) < slides.length-1) {
                let current = +localStorage.getItem(storageName) + 1
                localStorage.setItem(storageName, current);
             } else {
                 localStorage.setItem(storageName, 0);
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
                localStorage.setItem(storageName, i)
                activeSlide = localStorage.getItem(storageName)
                changeSlides()
                refreshLocalStorage = setInterval( () => { autoStorage() }, 7999);
                refreshIntervalId = setInterval( () => {changeSlides()},8000);
            })
        })
    
        nextBtn.addEventListener('click', () => {
            clearInterval(refreshLocalStorage)
            clearInterval(refreshIntervalId)
            activeSlide = +localStorage.getItem(storageName) + 1;
            localStorage.setItem(storageName, activeSlide)
            changeSlides();
            refreshLocalStorage = setInterval( () => { autoStorage() }, 7999);
            refreshIntervalId = setInterval( () => {changeSlides()},8000);
    
        })
    
        prevBtn.addEventListener('click', () => {
            clearInterval(refreshLocalStorage)
            clearInterval(refreshIntervalId)
            activeSlide = +localStorage.getItem(storageName) - 1;
            localStorage.setItem(storageName, activeSlide)
            changeSlides();
            refreshLocalStorage = setInterval( () => { autoStorage() }, 7999);
            refreshIntervalId = setInterval( () => {changeSlides()},8000);
    
        })
}
module.exports = sliderEngine;