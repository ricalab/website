document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.text').style.opacity = '1';
                entry.target.querySelector('.text').style.transform = 'translateY(0)';
                entry.target.querySelector('.image img').style.transform = 'scale(1.05)';
            }
        });
    }, {
        threshold: 0.3
    });

    features.forEach(feature => observer.observe(feature));
});