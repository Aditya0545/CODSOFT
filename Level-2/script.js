document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "content"
    var skillItems = document.querySelectorAll(".content");

    // Add event listeners for mouseover and mouseout
    skillItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            this.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Change to your desired hover color
        });

        item.addEventListener("mouseout", function() {
            this.style.backgroundColor = "transparent"; // Change to the default background color
        });
    });
});