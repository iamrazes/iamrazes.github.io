document.addEventListener("DOMContentLoaded", function () {

    //menu mobile button 
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    //resize button
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            menu.classList.add("hidden");
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const items = document.querySelectorAll(".carousel-item");

    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].clientWidth;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Reset to first item
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // Go to last item
        }
        updateCarousel();
    });

    // Initial update
    updateCarousel();
});
