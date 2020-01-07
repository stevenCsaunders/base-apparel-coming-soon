const form = document.querySelector(`form`);
const emailInput = document.querySelector(`#email`);
const errorMessage = document.querySelector(`#email-reject-text`);
const errorImg = document.querySelector(`#email-reject-img`);

const setError = () => {
	emailInput.classList.add(`red-border`);
	emailInput.classList.remove(`green-border`);
	errorMessage.classList.remove(`hidden`);
	errorImg.classList.remove(`hidden`);
}

const setSuccess = () => {
	emailInput.classList.remove(`red-border`);
	emailInput.classList.add(`green-border`);
	errorMessage.classList.add(`hidden`);
	errorImg.classList.add(`hidden`);
}

form.addEventListener(`submit`, (e) => {
	e.preventDefault();
	checkEmail();
})

function checkEmail() {
	const emailValue = emailInput.value.trim();
	if (emailValue === '' || !validateEmail(emailValue)) {
		setError();
	} else if (validateEmail(emailValue)) {
		setSuccess();
	}
}

function validateEmail(email) {
	const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return expression.test(String(email).toLowerCase())
}