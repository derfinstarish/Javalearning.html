
        function showWelcomeMessage() {
            alert("Welcome to our coffee paradise! Enjoy the best coffee experience with us.");
        }
        // Call the function to show the welcome message when the page loads
        window.onload = showWelcomeMessage;
        const orderButton = document.querySelector('.one');
        const contactButton = document.querySelector('.two');

        orderButton.addEventListener('click', () => {
            alert('Thank you for your interest! Our ordering system is coming soon.');
        });

        contactButton.addEventListener('click', () => {
            alert('Feel free to reach out to us at contact@coffee.com');
        });
        const navLinks = document.querySelectorAll('.nav ul li a');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`You clicked on ${link.textContent}. This section is under construction.`);
            });
        });
        const images = document.querySelectorAll('.bar img');

        images.forEach(image => {
            image.addEventListener('click', () => {
                alert('This is our special coffee! Stay tuned for more details.');
            });
        });
        const footer = document.querySelector('footer');

        footer.addEventListener('click', () => {
            alert('Thank you for visiting our website! We hope to see you again soon.');
        });

