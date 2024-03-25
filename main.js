
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-links a'); // Select all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the href attribute
            const targetSection = document.querySelector(targetId); // Select the target section

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    

});
