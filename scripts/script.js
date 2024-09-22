document.addEventListener('DOMContentLoaded', function() {
    // Fetch and insert header
    fetch('/portfolio/home/elements/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Fetch and insert navbar
            return fetch('/portfolio/home/elements/navbar.html');
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Fetch and insert footer
            return fetch('/portfolio/home/elements/footer.html');
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;

            // Now that all elements are loaded, handle navigation logic
            // Get current page URL
            var currentPath = window.location.pathname;

            // Select all navigation links
            var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

            navLinks.forEach(function(link) {
                // Compare the href attribute with the current path
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading content:', error));
});

// Include EmailJS SDK
(function(){
    emailjs.init("pyOLpZ1t4xUG3PosE"); // Replace with your public API key
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_fbrmaea', 'template_x6n1wgp', this) // Replace with your Service ID and Template ID
        .then(function() {
            alert('Thank you for your message! I will get back to you soon.');
            document.getElementById('contactForm').reset(); // Clear the form
        }, function(error) {
            alert('Failed to send your message. Please try again later.');
            console.error('Error:', error);
        });
});