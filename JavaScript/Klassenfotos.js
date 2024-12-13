const toggleButton = document.querySelector('.toggle-button');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.querySelector('.close-button');
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');});

