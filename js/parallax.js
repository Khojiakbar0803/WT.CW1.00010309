const parallax = document.querySelector('.back1');
parallax.style.height = '70vh'

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})