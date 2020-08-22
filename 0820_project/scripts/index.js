(function () {
  const menuBtn = document.getElementById('nav-button')
  const menu = document.getElementById('nav-menu')

  menuBtn.addEventListener('click', _ => {
    menu.classList.toggle('show')
  })
})()


