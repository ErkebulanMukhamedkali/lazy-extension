const skipOpeningClass = "vjs-overlay-bottom-left"
const nextEpisodeClass = "vjs-overlay-bottom-right"
const autoPlayClass = "vjs-big-play-button"

let bigObserver = new MutationObserver(function(mutations, obs) {
    let autoPlayButton = document.querySelector(`.${autoPlayClass}`)
    if (autoPlayButton) autoPlayButton.click();

    let skipOpeningButton = document.querySelector(`.${skipOpeningClass}`)
    let nextEpisodeButton = document.querySelector(`.${nextEpisodeClass}`)
    if (skipOpeningButton && nextEpisodeButton) {
        setSkipObserver();
        obs.disconnect();
        setSkipObserver();
        return;
    }
})
bigObserver.observe(document, { childList: true, subtree: true });

function setSkipObserver() {
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
}
