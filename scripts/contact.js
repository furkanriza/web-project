function checkRequirements(input) {
	if (input.val().trim() === "") {
		input.css("border", "2px solid red");
	} else if (input.attr("type") === "email") {
		var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailRegex.test(input.val())) {
			input.css("border", "2px solid red");
		} else {
			input.css("border", "");
		}
	} else if (input.attr("type") === "tel") {
		if (input.val().length !== 10){
			input.css("border", "2px solid red");
		} else {
			input.css("border", "");
		}
	}
}

$(document).ready(function() { $("input:required").css("border", "");
	$("input:required").on("input", function() {
		if ($(this).val().trim() === "") {
			$(this).css("border", "2px solid red");
		} else {
			$(this).css("border", "");
		}
	});

	$("input:required, input[type='email'], input[type='tel'], textarea").on(
		"blur",
		function() {
			checkRequirements($(this));
		},
	);

	// Allow only numeric characters and some special keys like Backspace and Delete
	$("input[type='tel']").on("keypress", function(event) {
		var charCode = event.which ? event.which : event.keyCode;

		if (
			charCode > 31 &&
			(charCode < 48 || charCode > 57) &&
			charCode !== 8 &&
			charCode !== 46
		) {
			event.preventDefault();
		}
	});
});
