const htmlTeg = document.getElementById('html-teg')
const mobileMenu = document.getElementById('mobileMenu')

document.getElementById('switch').addEventListener('click', function () {
  htmlTeg.classList.toggle('dark')

  if (htmlTeg.classList.contains('dark')) {
    document.getElementById('switch').innerHTML =
      '<i class="ri-sun-line text-4xl text-primary-foreground hover:text-primary transition-all duration-300 ease-in-out"></i>'
  } else {
    document.getElementById('switch').innerHTML =
      '<i class="ri-moon-clear-line text-4xl text-primary-foreground hover:text-primary transition-all duration-300 ease-in-out"></i>'
  }
})

// mobile
document.getElementById('switchMB').addEventListener('click', function () {
  htmlTeg.classList.toggle('dark')

  if (htmlTeg.classList.contains('dark')) {
    document.getElementById('switchMB').innerHTML =
      '<i class="ri-sun-line text-4xl text-primary-foreground hover:text-primary transition-all duration-300 ease-in-out"></i>'
  } else {
    document.getElementById('switchMB').innerHTML =
      '<i class="ri-moon-clear-line text-4xl text-primary-foreground hover:text-primary transition-all duration-300 ease-in-out"></i>'
  }
})

function handleMenu() {
  mobileMenu.classList.toggle('hidden')
}
