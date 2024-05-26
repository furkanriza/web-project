$(document).ready(function() {
	$(".gallery-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
	});

	getDepartments();
});

var departments = [];

function getDepartments() {
	$.getJSON("./json_files/videos.json", function(data) {
		var output = "";
		data.departments.forEach((department) => {
			var { name, description, videoId } = department;
			output += '<div class="department">';
			output += `<p>${name}</p>`;
			output += `<button class="watchbtn" onclick="loadVideo('${videoId}')">Watch Promotional Video</button>`;
			output += "</div>";
			departments.push({ name, description, videoId });
		});
		var buttonsContainer = document.getElementById("buttons-container");
		buttonsContainer.innerHTML = output;
	}).fail(function(jqxhr, textStatus, error) {
		console.error("Error fetching departments:", textStatus, error);
	});
}

function loadVideo(videoId) {
	var embedId = departments.find((dep) => dep.videoId === videoId).videoId;
	var videoContainer = document.getElementById("video-container");
	videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${embedId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}
