function footerAnimate() {
    const rodapeH = document.querySelector('footer').getBoundingClientRect().top;
    const elementoRodape = document.getElementById("footerAnime");

    rodapeH < window.innerHeight ? elementoRodape.className = 'autor animaRodape' : elementoRodape.className = 'autor';
}