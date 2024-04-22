// JavaScript for handling navigation active states
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});

// JavaScript for simple form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form fields
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            return;
        }

        // If all fields are valid, submit the form
        alert('Form submitted successfully!');
        form.reset();
    });
});
