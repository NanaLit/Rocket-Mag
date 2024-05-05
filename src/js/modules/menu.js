const menu = () => {
    const menu = document.querySelector('.header__menu')
    const menuButton = document.querySelector('.header__burger')
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('header__menu--active')
        const tlbuttonToggle = gsap.timeline({
            duration: 0.05
        });
        if(menu.classList.contains('header__menu--active')) {
            tlbuttonToggle.to('.header__burger span:first-child', { width: 0}, '<')
                    .to('.header__burger span:nth-child(2)', { width: 0}, '<')
                    .to('.header__burger span:nth-child(3)', { width: 0}, '<')
                    .to('.header__burger span:nth-child(4)', { opacity: 1}, '<100%')
                    .to('.header__burger span:nth-child(5)', { opacity: 1}, '<')
        } else {
            tlbuttonToggle.to('.header__burger span:nth-child(5)', { opacity: 0})
                        .to('.header__burger span:nth-child(4)', { opacity: 0}, '<')
                        .to('.header__burger span:nth-child(3)', { width: 12}, '<100%')
                        .to('.header__burger span:nth-child(2)', { width: 24}, '<')
                        .to('.header__burger span:nth-child(1)', { width: 24}, '<')
        }
    })

    const pathname = window.location.pathname
    const linksItems = document.querySelectorAll('.header__item')

    linksItems.forEach(item => {
        item.classList.remove('header__item--active')
        console.log(item.querySelector('a').getAttribute('href'))
        if(item.querySelector('a').getAttribute('href') === pathname) {
            item.classList.add('header__item--active')
        }
    })
}
module.exports = menu;