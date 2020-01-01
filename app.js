const form = document.querySelector(`form`);
const emailInput = document.querySelector(`input`);
const errorMessage = document.querySelector(`#email-validate`);
const errorImg = document.querySelector(`#email-reject`);

form.addEventListener(`input`, (e) => {
	e.preventDefault();
	checkEmail();
})

//CHECK EMAIL AGAINST INVALID INPUTS
function checkEmail() {
	const emailValue = emailInput.value.trim();
	if(emailValue === '' || !validateEmail(emailValue)) {
		setErrorFor();
	}else if(validateEmail(emailValue)) {
		setSuccess();
	}
}

//REGEX EMAIL VALIDATION
function validateEmail(email) {
	const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(String(email).toLowerCase())
}

//SETTING THE CLASSES TO SHOW ERROR
function setErrorFor(e) {
	emailInput.classList.add(`red-border`);
	emailInput.classList.remove(`green-border`);
	errorMessage.classList.remove(`hidden`);
	errorImg.classList.remove(`hidden`);
}

function setSuccess() {
	emailInput.classList.remove(`red-border`);
	emailInput.classList.add(`green-border`);
	errorMessage.classList.add(`hidden`);
	errorImg.classList.add(`hidden`);
}