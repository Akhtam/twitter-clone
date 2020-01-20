const VALIDATOR = require('validator');
const VALIDTEXT = require('./validText');

module.exports = function validateLoginInput(data) {
	let errors = {};
	data.email = VALIDTEXT(data.email) ? data.email : '';
	data.password = VALIDTEXT(data.password) ? data.password : '';

	if (!VALIDATOR.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	if (VALIDATOR.isEmpty(data.email)) {
		errors.email = 'Email field is required';
	}

	if (VALIDATOR.isEmpty(data.password)) {
		errors.password = 'Password field is required';
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0
	};
};
