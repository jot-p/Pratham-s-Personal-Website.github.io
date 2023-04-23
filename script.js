// Get the current year and add it to the footer
var currentYear = new Date().getFullYear();
var footerText = document.querySelector('footer p');
footerText.innerHTML += " " + currentYear;

// add event listener for form submission
document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault(); // prevent form submission

	// get input values
	const name = document.querySelector('#name').value.trim();
	const email = document.querySelector('#email').value.trim();
	const message = document.querySelector('#message').value.trim();

	// validate input values
	if (!name || !email || !message) {
		alert('Please fill in all fields.');
		return;
	}

	// send message
	alert(`Thank you for your message, ${name}! We will be in touch with you shortly.`);
	document.querySelector('form').reset();
});