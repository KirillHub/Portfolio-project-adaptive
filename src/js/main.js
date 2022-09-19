'use strict';

/*
const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('menu_active');
});

closeElem.addEventListener('click', (e) => {
	menu.classList.remove('menu_active');
});

*/

const scale = document.querySelectorAll('.work-footer__scale_child');
const persentCount = document.querySelectorAll('.work-footer__descr');

persentCount.forEach((persentItem, persentIndex) => {
	const count = parseInt(persentItem.textContent.match(/\d+/));

	scale.forEach((item, index) => {
		if (persentIndex === index) {
			item.style.width = count + "%";
			item.style.backgroundColor = '#FFA501';
		}
	});
});



