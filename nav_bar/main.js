const toggleBth = document.querySelector('.navbar__toogleBth');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBth.addEventListener('click',()=> {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});