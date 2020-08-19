const nav = document.getElementsByTagName('nav')[0];
const btn = document.getElementById('nav-button');

btn.addEventListener('click', _ => nav.classList.toggle('show'));

// Prevents the focus state from activating on mousedown but
// keeps the focus state for keyboard users
btn.addEventListener('mousedown', (e) => { e.preventDefault() });