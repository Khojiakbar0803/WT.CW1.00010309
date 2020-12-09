const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

burger.addEventListener('click', foo)

function foo() {
    navLinks.classList.toggle("open");
}

