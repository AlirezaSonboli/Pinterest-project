document.addEventListener('DOMContentLoaded', function() {
    const iconList = document.querySelector('.icon-list');
    const dropdownList = document.getElementById('dropdown-list');

    iconList.addEventListener('click', function() {
        dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    })
    document.addEventListener('click', function(event) {
        if (!iconList.contains(event.target) && !dropdownList.contains(event.target)) {
            dropdownList.style.display = 'none';
        }
    });
});


const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', function() {
        // Check if the clicked image already has the 'clicked' class
        if (image.classList.contains('clicked')) {
            image.classList.remove('clicked');
        } else {
            // Remove the 'clicked' class from all images
            images.forEach(img => img.classList.remove('clicked'));
            // Add the 'clicked' class to the clicked image
            image.classList.add('clicked');
        }
    });
});
