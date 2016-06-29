$(document).ready(function() {

	$('#contact-container').hide();
	$('#contact-container').fadeIn(800);

	var emailCheck = function(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email); 

	}

	$('#submitButton').click(function() {

		$('#errorWrapper').hide();
		var errorMessage = "";

		var firstName = $('#firstName').val()
		var lastName = $('#lastName').val()
		var email = $('#email').val()
		var username = $('#username').val()
		var password = $('#password').val()
		var confirmPassword = $('#confirmPassword').val()

		if (firstName == "") {
			errorMessage += "Please enter your first name.<br>";
		}

		if (lastName == "") {
			errorMessage += "Please enter your last name.<br>";
		}

		if (email == "") {
			errorMessage += "Please enter your email.<br>";
		}

		else if (emailCheck(email) == false) {
			errorMessage += "Invalid email address formatting.<br>";
		}

		if (username == "") {
			errorMessage += "Please enter a username.<br>";
		}

		if (password == "") {
			errorMessage += "Please enter a password.<br>";
		}

		if (confirmPassword == "") {
			errorMessage += "Please confirm your password.<br>";
		}

		if (password != confirmPassword) {
			errorMessage += "Your passwords do not match.<br>"
		}

		if (errorMessage == "") {
			$('#errorMessage').html("There were no errors! Congratulations!");
		}

		else {
			$('#errorMessage').html(errorMessage);
		}

		$('#errorWrapper').fadeIn(1000);

	});

});