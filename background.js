alert("i want to die");

const videos = document.querySelectorAll("div#dismissable.style-scope.ytd-grid-video-renderer");
console.log(videos);
videos.forEach((el) => {
    el.addEventListener("mouseover", (event) => { showClickbaitInfo(event.target) });
});

function showClickbaitInfo(element) {
    alert("i seek death");
}