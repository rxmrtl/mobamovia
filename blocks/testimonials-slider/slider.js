var initializeTestimonialSlider = function(slider) {
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    let currentSlide = 0;
    const totalSlides = slides.length;

    if (totalSlides <= 1) {
        if(prevBtn) prevBtn.style.display = 'none';
        if(nextBtn) nextBtn.style.display = 'none';
        return;
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    showSlide(0);
};

// Initialize sliders on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.slider_container').forEach(function(slider) {
        initializeTestimonialSlider(slider);
    });
});

// For ACF preview in the editor
if (window.acf) {
    window.acf.addAction('render_block_preview/type=testimonials-slider', function($block) {
        var slider = $block[0].querySelector('.slider_container');
        initializeTestimonialSlider(slider);
    });
}
