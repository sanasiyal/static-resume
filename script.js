document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('toggle-button');
    var skillsList = document.getElementById('skills-list');
    button.addEventListener('click', function () {
        // Check the current display style of the skills list
        if (skillsList.style.display === 'none') {
            // Show the skills list
            skillsList.style.display = 'block';
        }
        else {
            // Hide the skills list
            skillsList.style.display = 'none';
        }
    });
});
