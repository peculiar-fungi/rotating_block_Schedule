document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionBtn');
    const greeting = document.getElementById('greeting');
    const body = document.body;
    body.classList.toggle('dark-mode');
    button.addEventListener('click', () => {
        // Toggle dark mode class on the body
        body.classList.toggle('dark-mode');

        // Dynamically change text based on current state
        if (body.classList.contains('dark-mode')) {
            greeting.textContent = "Good Night!";
            button.textContent = "Switch to Light";
        } else {
            greeting.textContent = "Hello, Visitor!";
            button.textContent = "Switch to Dark";
        }
    });
});
