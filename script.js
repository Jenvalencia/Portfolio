document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle the mobile menu when the hamburger icon is clicked
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        
        // Change icon between hamburger (bi-list) and close (bi-x)
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('bi-list');
            icon.classList.add('bi-x');
        } else {
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        }
    });

    // Close the menu when a link is clicked (for better mobile UX)
    document.querySelectorAll('.nav-links a').forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('bi-x');
                menuToggle.querySelector('i').classList.add('bi-list');
            }
        });
    });
});