const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

if (menuToggle && menuLinks) {
    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
    });
}
