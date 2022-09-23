'use strict';
$(document).ready(function () {
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
			},
			messages: {
				name: {
					required: "This is a required field",
					minlength: jQuery.validator.format("The name cannot contain less than {0} characters!"),
				},
				email: {
					required: "This is a required field",
					email: "Invalid email address format"
				}
			}
		});
	};

	validateForms('#contacts-form');


	$(window).scroll(() => $(this).scrollTop() > 700 ? $('.pageup').fadeIn() :
		$('.pageup').fadeOut());

});

