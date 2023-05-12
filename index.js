const toggleBtn = document.getElementById('toggleDark');
const body = document.querySelector('body');
const navbar = document.getElementById('navbar')
const form = document.getElementById('content')

//Funciones modo oscuro y modo claro
function lightMode() {
    body.classList.remove('dark-mode')
    navbar.classList.remove('dark-mode-navbar')
    form.classList.remove('content-dark-mode')
    localStorage.setItem('dark-mode', 'false')
}

function darkMode() {
    body.classList.add('dark-mode')
    navbar.classList.add('dark-mode-navbar')
    form.classList.add('content-dark-mode')
    localStorage.setItem('dark-mode', 'true')
}

//Cambia de modo claro a oscuro y/o viceversa
toggleBtn.addEventListener('click', function () {
    this.classList.toggle('bi-emoji-sunglasses-fill');
    if (this.classList.toggle('bi-emoji-sunglasses')) {
        lightMode()        
    } else {
        darkMode()
    }
});



//Obtengo el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
    darkMode()
    toggleBtn.classList.remove('bi-emoji-sunglasses')
    toggleBtn.classList.add('bi-emoji-sunglasses-fill')
} else {
    lightMode()
    toggleBtn.classList.remove('bi-emoji-sunglasses-fill')
    toggleBtn.classList.add('bi-emoji-sunglasses')
}