window.onscroll = function() {
    var movingText = document.getElementById('quienesSomos');
    var scrollPositionTop = window.scrollY;
    var scrollPositionBot = window.scrollY + window.scrollY;
    var containerTop = movingText.offsetTop;
    var containerHeight = movingText.offsetHeight

    if (scrollPositionBot > containerTop && scrollPositionTop < containerTop + containerHeight) {
        movingText.style = "transition: transform 1.5s, ease 1s; transform: translate3d(0px, 0px, 0px)";
    } else {
        movingText.style = "transition: transform 1.5s, ease 1s;  transform: translate3d(100px, 0px, 0px)";
        movingText.style.opacity = "0";
    }
    
    var logo = document.getElementById('logo');
    var logoSmall = document.getElementById('logo-pequeño');
    var linkLogo = document.getElementById('link-logo');
    if(window.scrollY >= 50){
        logo.classList.add('hidden');
        linkLogo.classList.add('link-logo-pequeño');
        logoSmall.classList.remove('hidden');
    } else {
        logo.classList.remove('hidden');
        linkLogo.classList.remove('link-logo-pequeño');
        logoSmall.classList.add('hidden');
    }
};

function enterSlide(idTitulo, idPc) {
    var title = document.getElementById(idTitulo);
    var movingText = document.getElementById(idPc);
    title.style = 'transform: translate3d(0px, -130px, 0px); transition: transform 500ms ease 0s';
    movingText.style.display = "flex";
}
function leaveSlide(idTitulo, idPc) {
    var title = document.getElementById(idTitulo);
    var movingText = document.getElementById(idPc);
    movingText.style.display = "none";
    title.style = 'transform: translate3d(0px, 0px, 0px); transition: transform 500ms ease 0s';
}

function apareceTexto(idCirculo, idCuadro){
    var circulo = document.getElementById(idCirculo);
    var cuadro = document.getElementById(idCuadro);
    circulo.style = "transform: translate(-80px, -85px) scale(0.6); transition: transform 500ms ease;";
    cuadro.style.display = "block";
}
function desapareceTexto(idCirculo, idCuadro){
    var circulo = document.getElementById(idCirculo);
    var cuadro = document.getElementById(idCuadro);
    circulo.style = "transform: translate(0px, 0px) scale(1); transition: transform 500ms ease;";
    cuadro.style.display = "none";
}
const slider = tns({
    container: '.slider',
    items: 5, // Cuantas imagenes se quiere mostrar por pantalla
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 5000,
  });