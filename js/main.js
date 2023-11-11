const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row')

navBtn.onclick = function() {
    navBtn.classList.toggle('nav-icon-btn--active')
    nav.classList.toggle('header__top-row--mobile')
    document.body.classList.toggle('no-scroll')
}