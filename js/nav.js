const nav = document.querySelector('.nav');
const navOpenBtn = document.querySelector('.nav__openMobNav');
const navCloseBtn = document.querySelector('.nav__closeMobNav');
const body = document.body;

navOpenBtn.addEventListener('click', function() {
    nav.classList.toggle('nav--show');
    body.classList.add('modal-open');

    navCloseBtn.addEventListener('click', function() {
        nav.classList.remove('nav--show');
        body.classList.remove('modal-open');
    });
});

