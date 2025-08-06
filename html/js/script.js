// Toogle class active menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#bar-menu').onclick = function(e) {
    e.preventDefault();
    navbarNav.classList.toggle('active');
};

// Toggle class active search
const searchForm = document.querySelector('.seacrh-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search').onclick = function(e) {
    e.preventDefault();
    searchForm.classList.toggle('active');
    searchBox.focus();
}

const menu = document.querySelector('#bar-menu');
const search = document.querySelector('#search');
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});