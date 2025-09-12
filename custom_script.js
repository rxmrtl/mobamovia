// Custom JavaScript for Mobamovia theme
document.addEventListener('DOMContentLoaded', function() {

    console.log('Mobamovia custom script loaded!');
    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });



    const burgerIcon = document.querySelector('.burger_menu_icon');
    const closeIcon = document.querySelector('.close_menu_icon');
    const mainHeader = document.querySelector('.main_header');
    const dropdownMenu = document.querySelector('.dropdown_menu');
    const body = document.body;
    
    function openMenu() {
        mainHeader.classList.add('menu_open');
        body.classList.add('menu_open'); // Prevent background scroll
    }
    
    function closeMenu() {
        mainHeader.classList.remove('menu_open');
        body.classList.remove('menu_open'); // Re-enable background scroll
    }
    
    // Event listeners
    if (burgerIcon) {
        burgerIcon.addEventListener('click', openMenu);
    }
    
    if (closeIcon) {
        closeIcon.addEventListener('click', closeMenu);
    }
    
    // Close menu on link click
    const menuLinks = document.querySelectorAll('.dropdown_menu a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Close on outside click
    document.addEventListener('click', function(event) {
        if (!mainHeader.contains(event.target) && 
            !dropdownMenu.contains(event.target) && 
            mainHeader.classList.contains('menu_open')) {
            closeMenu();
        }
    });
    
    // Close with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mainHeader.classList.contains('menu_open')) {
            closeMenu();
        }
    });



});



// Testimonials Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider_container');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
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
    
    
    
    // let autoPlayInterval;
    
    // function startAutoPlay() {
    //     autoPlayInterval = setInterval(nextSlide, 5000); 
    // }
    
    // function stopAutoPlay() {
    //     if (autoPlayInterval) {
    //         clearInterval(autoPlayInterval);
    //     }
    // }
    
    // startAutoPlay();
    
    // slider.addEventListener('mouseenter', stopAutoPlay);
    // slider.addEventListener('mouseleave', startAutoPlay);
    
    // [prevBtn, nextBtn, ...dots].forEach(element => {
    //     if (element) {
    //         element.addEventListener('click', () => {
    //             stopAutoPlay();
    //             setTimeout(startAutoPlay, 3000); 
    //         });
    //     }
    // });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
    
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
});





// Custom GSAP Animation
document.addEventListener('DOMContentLoaded', function() {
    const tl = gsap.timeline();

    const moviaChars = document.querySelectorAll('#movia .character:not(.circle-char)');
    const mobaChars = document.querySelectorAll('#moba .character:not(.circle-char)');
    const circleA = document.getElementById('circleA');
    const circleB = document.getElementById('circleB');
    const connectingLine = document.getElementById('connectingLine');
    const arrow = document.getElementById('arrow');
    const mm_logo_animate = document.querySelector('.mm_logo_animate');

    gsap.set([moviaChars, mobaChars], { opacity: 0, x: 0 });
    gsap.set([circleA, circleB], { opacity: 1, x: 0 });
    gsap.set([connectingLine], { opacity: 1, scaleX: 0, transformOrigin: "center center" });
    gsap.set(arrow, { opacity: 0, x: 0 });

    tl.to(moviaChars, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        from: { x: 50 }
    })
    .to(mobaChars, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        from: { x: -50 }
    }, "<");

    tl.to({}, { duration: 1 });

    tl.to(moviaChars, {
        opacity: 0,
        width: 0,
        marginRight: 0,
        duration: 1,
        stagger: { each: 0.1, from: "end" },
        ease: "power2.inOut"
    })
    .to(mobaChars, {
        opacity: 0,
        width: 0,
        marginRight: 0,
        duration: 1,
        stagger: { each: 0.1, from: "end" },
        ease: "power2.inOut"
    }, "<");

    tl.call(() => {
        const containerRect = mm_logo_animate.getBoundingClientRect();
        const circleARect = circleA.getBoundingClientRect();
        const circleBRect = circleB.getBoundingClientRect();

        const targetAX = -(circleARect.left - containerRect.left);
        const targetBX = containerRect.right - circleBRect.right;

        gsap.to(circleA, { x: targetAX, duration: 1, ease: "power2.out" });
        gsap.to(circleB, { x: targetBX, duration: 1, ease: "power2.out" });
    });

    tl.to(connectingLine, {
        scaleX: 1,
        duration: 1,
        ease: "power2.out"
    }, "+=0.3");

    tl.call(() => {
        const lineWidth = connectingLine.offsetWidth;

        const arrowLoop = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        arrowLoop
        .set(arrow, { x: 0, opacity: 1 })
        .to(arrow, {
            x: lineWidth,
            duration: 2,
            ease: "power2.inOut"
        })
        .to(arrow, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    const addHoverEffects = () => {
        [circleA, circleB].forEach(circle => {
            circle.addEventListener('mouseenter', () => {
                gsap.to(circle, { scale: 1.1, duration: 0.3, ease: "power2.out" });
            });
            circle.addEventListener('mouseleave', () => {
                gsap.to(circle, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });
    };
    tl.call(addHoverEffects, null, "+=1");
});



jQuery(function($) {    
    $(".serv_accordion ul > .accordion_item.is_active").children(".div_panel").slideDown();
    
    $(".serv_accordion ul > .accordion_item").click(function() {
        $(this).toggleClass("is_active").children(".div_panel").slideToggle("ease-out");
    });
});
