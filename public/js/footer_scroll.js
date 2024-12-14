// Function to check if the user has reached the bottom of the page
function isBottom() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}

// Function to show or hide the footer based on scroll position
function toggleFooter() {
    var footer = document.querySelector('.footer');
    if (isBottom()) {
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
}

// Event listener to toggle footer visibility on scroll
window.addEventListener('scroll', toggleFooter);

// Initial check to toggle footer visibility when the page loads
toggleFooter();
