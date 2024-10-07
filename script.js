const modeToggle = document.querySelector('#mode-toggle')
const body = document.body

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode')
})

const servicesToggle = document.querySelector('.services-toggle')
const servicesMenu = document.querySelector('.services-menu')

servicesToggle.addEventListener('click', () => {
    servicesMenu.style.display = servicesMenu.style.display === 'block' ? 'none' : 'block'
})

servicesMenu.style.display = 'none'

if (matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('light-mode')
}

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        body.classList.add('light-mode')
    } else {
        body.classList.remove('light-mode')
    }
})