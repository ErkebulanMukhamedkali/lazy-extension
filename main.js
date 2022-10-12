const skipOpeningClass = "vjs-overlay-bottom-left"
const nextEpisodeClass = "vjs-overlay-bottom-right"
const autoPlayClass = "vjs-big-play-button"

let autoPlayButton = document.getElementsByClassName(autoPlayClass)[0]
autoPlayButton.click()
console.log("clicked play button");

let skipOpeningButton = document.getElementsByClassName(skipOpeningClass)[0]
let skipOpeningObserver = new MutationObserver(function(){
    if(skipOpeningButton.style.display != 'none'){
        skipOpeningButton.click()
        console.log("clicked skip button");
    }
});
skipOpeningObserver.observe(skipOpeningButton, { attributes: true, childList: true });

let nextEpisodeButton = document.getElementsByClassName(nextEpisodeClass)[0]
let nextEpisodeObserver = new MutationObserver(function(){
    if(nextEpisodeButton.style.display != 'none'){
        nextEpisodeButton.click()
        console.log("clicked next button")
    }
});
nextEpisodeObserver.observe(nextEpisodeButton, { attributes: true, childList: true });
