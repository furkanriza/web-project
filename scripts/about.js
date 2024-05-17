$(document).ready(function () {
	$(".gallery-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
	});
});

var departments = [];

function getDepartments() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.github.com/repos/furkanriza/web-project-main/contents/videos.json');
	xhr.setRequestHeader('Authorization', 'token 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');
	xhr.onload = function () {
		if (xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);
			var data = JSON.parse(atob(response.content));
			var output = '<h2>Bölümler</h2>';
			var buttonsContainer = document.getElementById('video-buttons');
			data.departments.forEach(department => {
				var { name, description, videoId } = department;
				output += `<p>${name} - ${description}</p>`;
				output += `<button class="btn" onclick="loadVideo('${videoId}')">Tanıtım Videosunu İzle</button>`;
				departments.push({ name, description, videoId });
			});
			var buttonsContainer = document.getElementById('buttons-container');
			buttonsContainer.innerHTML = output;
		} else {
			console.error('Error fetching departments:', xhr.statusText);
		}
	};
	xhr.send();
}

function loadVideo(videoId) {
	var embedId = departments.find(dep => dep.videoId === videoId).videoId;
	var videoContainer = document.getElementById('video-container');
	videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${embedId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
}

document.addEventListener('DOMContentLoaded', function () {
	getDepartments();
});
