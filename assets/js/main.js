// Open/close mobile menu

const navBtn = document.getElementById("hamburger");
const navList = document.getElementById('nav-list');

navBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});