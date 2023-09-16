window.onscroll = function() {
    var movingText = document.getElementById('quienesSomos');
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

function enterSlide1() {
    var title = document.getElementById('problema');
    var movingText = document.getElementById('pc1');
    title.style = 'transform: translate3d(0px, -130px, 0px); transition: transform 500ms ease 0s';
    movingText.style.display = "block";
}
function leaveSlide1() {
    var title = document.getElementById('problema');
    var movingText = document.getElementById('pc1');
    movingText.style.display = "none";
    title.style = 'transform: translate3d(0px, 0px, 0px); transition: transform 500ms ease 0s';
}