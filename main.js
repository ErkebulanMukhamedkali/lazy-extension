const skipOpeningClass = "vjs-overlay-bottom-left"
const nextEpisodeClass = "vjs-overlay-bottom-right"
const autoPlayClass = "vjs-big-play-button"

let autoPlayButton = document.querySelector(`.${autoPlayClass}`)
autoPlayButton.click()

// Focus on video for "F" button work
document.querySelector('#my-player_html5_api').focus()

// const fullScreenClass = "vjs-fullscreen-control"
// let fullScreenButton = document.querySelector(`.${fullScreenClass}`)
// if(document.fullscreenElement === null) {
//     fullScreenButton.click()
// }

let skipOpeningButton = document.querySelector(`.${skipOpeningClass}`)
let nextEpisodeButton = document.querySelector(`.${nextEpisodeClass}`)

let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    if (mutation.attributeName !== 'class') return;
    if (!mutation.target.classList.contains('vjs-hidden')) mutation.target.click();
    })
});

observer.observe(skipOpeningButton, { attributes: true });
observer.observe(nextEpisodeButton, { attributes: true });
