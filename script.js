document.addEventListener("DOMContentLoaded", function() {
    const menuAnchors = document.querySelectorAll('.menu-onine');
    const picContainers = document.querySelectorAll('.picture-menu-container');

    menuAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const category = event.target.getAttribute('data-category');
            showCategory(category);
            updateActiveAnchor(event.target);
        });
    });

    function showCategory(category) {
        picContainers.forEach(container => {
            if (container.getAttribute('data-category') === category) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }

    function updateActiveAnchor(clickedAnchor) {
        menuAnchors.forEach(anchor => {
            if (anchor === clickedAnchor) {
                anchor.classList.add('active');
            } else {
                anchor.classList.remove('active');
            }
        });
    }

    showCategory('breakfast');
});
