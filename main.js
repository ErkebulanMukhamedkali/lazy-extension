const skipOpeningClass = ["vjs-overlay-bottom-left", "vjs-overlay-skip-intro"];
const nextEpisodeClass = ["vjs-overlay-bottom-right", "vjs-overlay-skip-intro"];
const autoPlayClass = ["vjs-big-play-button"];

let checkSubset = (parentArray, subsetArray) => {
    return subsetArray.every((el) => {
        return parentArray.contains(el);
    });
};

document.querySelector("body").onkeydown = (event) => {
    if (event.code === "KeyF" || event.key === 'f') {
        document.getElementById('my-player').requestFullscreen()
    }
};

function immidiateClickPlayButton() {
    let playButton = document.querySelector(`.${autoPlayClass[0]}`);
    if (playButton) {
        playButton.click();
        console.log('Play button just clicked');
        return;
    }
    console.log('No play button appeared after 1 second :(')
}
setTimeout(() => { immidiateClickPlayButton() }, 1000);

let bigObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.target.id === "my-player" && mutation.type === 'childList') {
            mutation.addedNodes.forEach(function(node){
                if (checkSubset(node.classList, autoPlayClass)) {
                    console.log("Play button appeared");
                    setTimeout(() => { node.click(); }, 1000);
                }
            });
        }
        if (checkSubset(mutation.target.classList, skipOpeningClass)) {
            if (!mutation.target.classList.contains('vjs-hidden')) {
                console.log("Skip opening button appeared");
                mutation.target.click();
            }
        }
        if (checkSubset(mutation.target.classList, nextEpisodeClass)) {
            if (!mutation.target.classList.contains('vjs-hidden')) {
                console.log("Next episode button appeared!!!");
                mutation.target.click();
            }
        }
    });
});

bigObserver.observe(document, { childList: true, subtree: true, attributes: true });
