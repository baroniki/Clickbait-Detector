setInterval(() => {
    const vidQuery = "img#img";
    const videos = document.querySelectorAll(vidQuery);

    videos.forEach((el) => {
        el.removeEventListener("mouseenter", (event) => { showClickbaitInfo(el) }, true); //prevents multiplying event listeners
        el.addEventListener("mouseenter", (event) => { showClickbaitInfo(el) }, true);

        // el.removeEventListener("mouseleave", (event) => { hideClickbaitInfo(el) }, true);
        // el.addEventListener("mouseleave", (event) => { hideClickbaitInfo(el) }, true);
    });
}, 1000);

function showClickbaitInfo(element) {
    if(element.id !== "dismissable")
        element = element.closest("ytd-thumbnail");
    else
        element = element.querySelector("ytd-thumbnail")

    if(element.nextSibling.className !== "clickbait-span")
    {
        let clickbaitElement = document.createElement("span");
        clickbaitElement.className = "clickbait-span"
        clickbaitElement.innerHTML = "Clickbait Score - 0 (Unlikely)";

        element.parentNode.insertBefore(clickbaitElement, element.nextSibling); 
    }
}

function hideClickbaitInfo(element) {
    const clickbaitElement = element.nextSibling;
    if(clickbaitElement.className === "clickbait-span") 
    {
        clickbaitElement.parentNode.removeChild(clickbaitElement);
    }
}