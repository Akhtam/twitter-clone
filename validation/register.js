const VALIDATOR = require('validator');
const VALIDTEXT = require('./validText');

module.exports = function validateRegisterInput(data) {
	let errors = {};

	data.handle = VALIDTEXT(data.handle) ? data.handle : '';
	data.email = VALIDTEXT(data.email) ? data.email : '';
	data.password = VALIDTEXT(data.password) ? data.password : '';
	data.password2 = VALIDTEXT(data.password2) ? data.password2 : '';

	if (!VALIDATOR.isLength(data.handle, { min: 2, max: 30 })) {
		errors.handle = 'Handle must be between 2 and 30 characters';
	}

	if (VALIDATOR.isEmpty(data.handle)) {
		errors.handle = 'Handle field is required';
	}

	if (VALIDATOR.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	}

	if (!VALIDATOR.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	if (VALIDATOR.isEmpty(data.password)) {
		errors.password = 'Password field is required';
	}

	if (!VALIDATOR.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = 'Password must be at least 6 characters';
	}

	if (VALIDATOR.isEmpty(data.password2)) {
		errors.password2 = 'Confirm Password field is required';
	}

	if (!VALIDATOR.equals(data.password, data.password2)) {
		errors.password2 = 'Passwords must match';
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0
	};
};
