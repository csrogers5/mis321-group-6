document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "https://www.sne-furniture.com/uploads/imagegallery/images/Landing-Living3.jpg",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://cdn.mos.cms.futurecdn.net/hsYsUoZSsSGDdmkajRrBgK.jpeg",
    ];

    let currentImageIndex = 0;
    const slideshowElement = document.getElementById('slideshow');

    function updateSlideshow() {
        slideshowElement.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length; 
    }

    updateSlideshow();

    setInterval(updateSlideshow, 5000);
});
