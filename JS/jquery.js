var movingText = document.getElementById('quienesSomos');
window.onscroll = function() {
    var scrollPositionTop = window.scrollY;
    var scrollPositionBot = window.scrollY + window.scrollY;
    var containerTop = movingText.offsetTop;
    var containerHeight = movingText.offsetHeight

    if (scrollPositionBot > containerTop && scrollPositionTop < containerTop + containerHeight) {
        movingText.style = "transition: transform 1.5s, ease 1s; transform: translate3d(0px, 0px, 0px)";
    } else {
        movingText.style = "transition: transform 1.5s, ease 1s;  transform: translate3d(150px, 0px, 0px)";
        movingText.style.opacity = "0";
    }
};