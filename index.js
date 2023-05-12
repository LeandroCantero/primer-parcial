const toggleBtn = document.getElementById('toggleDark');
const body = document.querySelector('body');
const navbar = document.getElementById('navbar')
const form = document.getElementById('content')

toggleBtn.addEventListener('click', function(){
    this.classList.toggle('bi-emoji-sunglasses-fill');
    if(this.classList.toggle('bi-emoji-sunglasses')){
        body.classList.remove('dark-mode')
        navbar.classList.remove('dark-mode-navbar')
        content.classList.remove('content-dark-mode')
    }else{
        body.classList.add('dark-mode')
        navbar.classList.add('dark-mode-navbar')
        content.classList.add('content-dark-mode')
    }
});

