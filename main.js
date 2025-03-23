const form = document.querySelector('.form');
const popupBtn = document.querySelector('.popup-btn');
const successMsg = document.querySelector('.popup-msg-wrapper');
const wrapper = document.querySelector('.wrapper');
const emailInput = document.querySelector('#email');
const errorLabelMsg = document.querySelector('.error-label-msg');


errorLabelMsg.classList.toggle('h');
function handleSubmit(e){
	e.preventDefault();
	if (emailInput.value.trim() === ''){
		emailInput.classList.add('error-msg');
		emailInput.focus();
		errorLabelMsg.classList.toggle('h');
		console.log(emailInput);
		console.log(errorLabelMsg);
		return;
	} else{
		if (!errorLabelMsg.classList.contains('h')){
			errorLabelMsg.classList.toggle('h');
			emailInput.classList.remove('error-msg');

		}
		wrapper.classList.add('h');
		successMsg.classList.toggle('h');
	}

}

function handleClick(e){
	e.preventDefault();
	wrapper.classList.remove('h');
	successMsg.classList.toggle('h');
	emailInput.value = '';
}
form.addEventListener('submit',handleSubmit);
popupBtn.addEventListener('click',handleClick);

