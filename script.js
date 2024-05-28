document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const mainContent = document.getElementById('main-content');

    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
                window.location.hash = page; // Update the URL hash
                document.querySelector(`#${page}`).style.opacity = 1; // Trigger the fade-in effect
            })
            .catch(err => console.log('Error loading page:', err));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Load home page by default
    loadPage('home');
});
