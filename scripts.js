const TOGGLEBUTTON = document.getElementsByClassName('toggle-button')[0];
const NAVBARLINKS = document.getElementsByClassName('navbar-links')[0];

TOGGLEBUTTON.addEventListener('click', () => {
    NAVBARLINKS.classList.toggle('active')
});