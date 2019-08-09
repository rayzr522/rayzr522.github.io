Iconify.preloadImages(['mdi-expand-more', 'mdi-expand-less']);

const navbarPulldown = document.querySelector('.navbar-pulldown');
const navbar = document.getElementById('nav');

navbarPulldown.addEventListener('click', () => {
    navbar.classList.toggle('open');
    navbarPulldown.classList.toggle('open');
});
