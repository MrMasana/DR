const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const sections = document.querySelectorAll('.section');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const target = e.target.getAttribute('href');
        sections.forEach((section) => {
            section.classList.remove('active');
        });
        document.querySelector(target).classList.add('active');
    }
});
