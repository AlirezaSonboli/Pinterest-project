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
        image.classList.add("clicked");
    });
});

document.addEventListener('click', function(event) {
    images.forEach(image => {
        if (!image.contains(event.target)) {
            image.classList.remove("clicked");
        }
    });
});
