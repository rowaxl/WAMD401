const body = document.body;
const btnMenu = document.getElementById('btn-menu');

const toggleMenu = () => body.classList.toggle('show');
btnMenu.addEventListener('click', toggleMenu);