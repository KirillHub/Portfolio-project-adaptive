'use strict';

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	closeMenu = document.querySelector('.menu__list'),
	body = document.querySelector("body");

document.onkeydown = function (evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		menu.classList.remove('menu_active');
	}
};

hamburger.addEventListener('click', () => {
	menu.classList.add('menu_active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('menu_active');
});

closeMenu.addEventListener('click', () => {
	menu.classList.remove('menu_active');
});


const scale = document.querySelectorAll('.work-footer__scale_child');
const persentCount = document.querySelectorAll('.work-footer__descr');

persentCount.forEach((persentItem, persentIndex) => {
	scale[persentIndex].style.width = persentItem.innerHTML;
});




