'use strict';

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('menu_active');
});

closeElem.addEventListener('click', (e) => {
	menu.classList.remove('menu_active');
})