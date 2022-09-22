'use strict';

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('menu_active');
});

closeElem.addEventListener('click', (e) => {
	menu.classList.remove('menu_active');
});

const scale = document.querySelectorAll('.work-footer__scale_child');
const persentCount = document.querySelectorAll('.work-footer__descr');

persentCount.forEach((persentItem, persentIndex) => {
	scale[persentIndex].style.width = persentItem.innerHTML;
});

//later
function validateForms(form) {
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
		},
		messages: {
			email: {
				required: "Это обязательное поле",
				email: "Не верный формат адреса электронной почты"
			}
		}
	});
};

validateForms('#contacts-form');