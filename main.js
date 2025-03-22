const form = document.querySelector('.form');
const popupBtn = document.querySelector('.popup-btn');
const successMsg = document.querySelector('.popup-msg-wrapper');
const wrapper = document.querySelector('.wrapper');



function handleSubmit(e){
	e.preventDefault();
	wrapper.classList.add('h');
	successMsg.classList.toggle('h');
	console.log('form submitted');
}

function handleClick(e){
	e.preventDefault();
	wrapper.classList.remove('h');
	successMsg.classList.toggle('h');
}

form.addEventListener('submit',handleSubmit);
popupBtn.addEventListener('click',handleClick);

