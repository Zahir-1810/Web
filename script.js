// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Carousel Auto Pause on Hover
const carousel = document.querySelector('#heroSlider');
if (carousel) {
    carousel.addEventListener('mouseover', () => {
        const bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause();
    });

    carousel.addEventListener('mouseleave', () => {
        const bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.cycle();
    });
}
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
 


 // whatsapp icon
 document.addEventListener("DOMContentLoaded", () => {
    const whatsappIcon = document.querySelector(".whatsapp-chat-icon");
    if (whatsappIcon) {
        whatsappIcon.style.animation = "bounce 1s infinite";
    }
})