const video = (videoCardsButtons, videoWrappers, videos) => {
   

    videoCardsButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            videoWrappers[i].classList.add('video-card__wrapper--active')
        })
    })
    videoWrappers.forEach((videoWrapper, i) => {
        videoWrapper.addEventListener('click', (e) => {
            if(e.target.classList.contains('video-card__wrapper--active')) {
                videoWrapper.classList.remove('video-card__wrapper--active')
                videos[i].pause()
            }
        })
    })
}
module.exports = video;