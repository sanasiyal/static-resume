document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-button') as HTMLButtonElement;
    const skillsList = document.getElementById('skills-list')  as HTMLElement;

    button.addEventListener('click', () => {
        // Check the current display style of the skills list
        if (skillsList.style.display === 'none') {
            // Show the skills list
            skillsList.style.display = 'block';
        } else {
            // Hide the skills list
            skillsList.style.display = 'none';
        }
    });
});




