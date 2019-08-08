const navbarPulldown = document.querySelector('.navbar-pulldown');
const navbarMore = navbarPulldown.children[0];
const navbarLess = navbarPulldown.children[1];
const navbar = document.getElementById('nav');

let navbarOpen = false;

navbarPulldown.addEventListener('click', () => {
    navbarOpen = !navbarOpen;

    navbar.style.display = navbarOpen ? '' : 'none';

    navbarMore.style.display = navbarOpen ? 'none' : '';
    navbarLess.style.display = navbarOpen ? '' : 'none';
});