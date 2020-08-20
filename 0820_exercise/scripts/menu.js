const menu = document.getElementById('menu');
const btn = document.querySelector('.btn-menu');

btn.addEventListener('click', function(){
    menu.classList.toggle('show');
});