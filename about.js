console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('form has been submitted');
}

function handleImage(e) {
	e.preventDefault();
	alert('You are a nice person.')
}


let img = document.querySelector('img')
let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);




img.addEventListener('mouseover', handleImage)