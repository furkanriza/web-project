document.addEventListener("DOMContentLoaded", function() {
    var entrepreneurs = [];
    var currentIndex = 0;

    function showEntrepreneur(index) {
        var container = document.getElementById("entrepreneurs-container");
        var entrepreneur = entrepreneurs[index];
        var output = "";

        output += '<div class="entrepreneur">';
        output += "<h2>" + entrepreneur.name + "</h2>";
        output +=
            '<img src="' + entrepreneur.img + '" alt="' + entrepreneur.alt + '" />';
        output += "<p>" + entrepreneur.company + "</p>";
        output += "<p>Graduation Year: " + entrepreneur.year + "</p>";
        output += "<p>" + entrepreneur.bio + "</p>";
        output += "</div>";

        container.innerHTML = output;
    }

    function getEntrepreneurs() {
        $.getJSON("./json_files/entrepreneurs.json", function(data) {
            entrepreneurs = data;
            showEntrepreneur(currentIndex);
        }).fail(function(jqxhr, textStatus, error) {
            console.error("Error fetching the alumni data:", textStatus, error);
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % entrepreneurs.length;
        showEntrepreneur(currentIndex);
    }

    function showPrevious() {
        currentIndex =
            (currentIndex - 1 + entrepreneurs.length) % entrepreneurs.length;
        showEntrepreneur(currentIndex);
    }

    document.getElementById("next-btn").addEventListener("click", showNext);
    document.getElementById("prev-btn").addEventListener("click", showPrevious);

    getEntrepreneurs();
});
