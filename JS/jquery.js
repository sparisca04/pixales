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

entramouse = function(){
    var movingText = document.getElementById('pc1');
    movingText.style.display = "block";
    movingText.style = 'transform: translate3d(0px, -130px, 0px); transition: transform 500ms ease 0s';
}
salemouse = function(){
    var movingText = document.getElementById('pc1');
    movingText.style.display = "none";
    movingText.style = 'transform: translate3d(0px, 0px, 0px); transition: transform 500ms ease 0s';
}