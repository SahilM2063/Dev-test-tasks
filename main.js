// navigation items code

const nav_items = document.querySelectorAll('.nav_item');

nav_items.forEach((itm) => {
    itm.addEventListener('click', () => {
        nav_items.forEach((itm) => {
            itm.classList.remove('active');
            itm.querySelector('.icon img').setAttribute('src', itm.querySelector('.icon img').getAttribute('data-outlined'));
        })
        itm.classList.add('active');
        itm.querySelector('.icon img').setAttribute('src', itm.querySelector('.icon img').getAttribute('data-filled'));
    })
})

// sidebar code 

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');


menu.addEventListener('click', () => {
    sidebar.style.left = '0';
})

close.addEventListener('click', () => {
    sidebar.style.left = '-100%';
})