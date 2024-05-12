$(document).ready(function() {
	$(".chzn-select").chosen();

	$("#professorSelect").change(function() {
		var selectedProfessor = $(this).val();
		var professorImage = $("#professorImage");
		var professorName = $("#professorName");
		var professorDOB = $("#professorDOB");

		var professorInfo = {
			a: {
				name: "Alan Turing",
				dob: "Jun 23, 1912",
				image: "public/alan-turing.jpg",
			},
			b: {
				name: "Dennis Ritchie",
				dob: "Sep 9, 1941",
				image: "public/dennis-ritchie.jpg",
			},
			c: {
				name: "Ken Thompson",
				dob: "Feb 4, 1943",
				image: "public/ken-thompson.jpg",
			},
			d: {
				name: "Richard Stallman",
				dob: "Mar 16, 1953",
				image: "public/richard-stallman.jpg",
			},
		};

		if (selectedProfessor in professorInfo) {
			var info = professorInfo[selectedProfessor];
			professorImage.attr("src", info.image);
			professorName.text(info.name);
			professorDOB.text(info.dob);
		}
	});
});
