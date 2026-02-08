document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const mobileMenu = document.getElementById('mobile-menu');
    const headerNav = document.querySelector('.header-nav');
    const header = document.querySelector('header');

    if (mobileMenu && headerNav) {
        mobileMenu.addEventListener('click', () => {
            headerNav.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        headerNav.querySelectorAll('li a').forEach(link => {
            link.addEventListener('click', () => {
                headerNav.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }


    const heroTl = gsap.timeline();

    heroTl.from(".title h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
        .from(".subtitle p", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".container-phone img", {
            x: 100,
            opacity: 0,
            duration: 1.2,
            scale: 0.9,
            ease: "power2.out"
        }, "-=1");


    gsap.from(".about-image img", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".about-cta", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out"
    });

    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".grid-card",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".card-project", {
        scrollTrigger: {
            trigger: ".grid-project",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".testimonial-card", {
        scrollTrigger: {
            trigger: ".grid-testimonials",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".container-img-process", {
        scrollTrigger: {
            trigger: "#process",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});
