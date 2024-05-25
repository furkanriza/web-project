document.addEventListener('DOMContentLoaded', function() {
    var entrepreneurs = [];
    var currentIndex = 0;

    function showEntrepreneur(index) {
        var container = document.getElementById('entrepreneurs-container');
        var entrepreneur = entrepreneurs[index];
        var output = '';

        output += '<div class="entrepreneur">';
        output += '<h2>' + entrepreneur.name + '</h2>';
        output += '<img src="' + entrepreneur.img + '" alt="' + entrepreneur.alt + '" />';
        output += '<p>' + entrepreneur.company + '</p>';
        output += '<p>Graduation Year: ' + entrepreneur.year + '</p>';
        output += '<p>' + entrepreneur.bio + '</p>';
        output += '</div>';

        container.innerHTML = output;
    }

    function getEntrepreneurs() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/repos/furkanriza/web-project-main/contents/entrepreneurs.json', true);
        xhr.setRequestHeader('Authorization', 'token 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');
        xhr.overrideMimeType('application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                entrepreneurs = JSON.parse(atob(response.content));
                showEntrepreneur(currentIndex);
            } else {
                console.error('Error fetching the alumni data:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Request error...');
        };
        xhr.send();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % entrepreneurs.length;
        showEntrepreneur(currentIndex);
    }

    function showPrevious() {
        currentIndex = (currentIndex - 1 + entrepreneurs.length) % entrepreneurs.length;
        showEntrepreneur(currentIndex);
    }

    document.getElementById('next-btn').addEventListener('click', showNext);
    document.getElementById('prev-btn').addEventListener('click', showPrevious);

    getEntrepreneurs();
});
