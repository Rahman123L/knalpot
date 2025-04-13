document.addEventListener('DOMContentLoaded', function() {
    gsap.from('.max-w-md', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    lucide.createIcons();
});