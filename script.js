// Smooth scroll to form section
function scrollToForm() {
    const formSection = document.getElementById('waitlist');
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-scroll class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(el => observer.observe(el));
    
    // Animate counter on page load
    animateCounter();
});

// Optional: Animate the counter number
function animateCounter() {
    const counterText = document.querySelector('.counter-text');
    if (!counterText) return;
    
    let count = 0;
    const target = 412;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        count += increment;
        if (count < target) {
            counterText.textContent = `${Math.floor(count)} users joined early access ✅`;
            requestAnimationFrame(updateCounter);
        } else {
            counterText.textContent = `${target} users joined early access ✅`;
        }
    };
    
    // Start animation after a small delay
    setTimeout(() => {
        updateCounter();
    }, 500);
}

// Add smooth hover effects to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
});

// Optional: Track form interactions (can be connected to analytics)
function trackFormInteraction() {
    console.log('User interacted with waitlist form');
    // Add your analytics tracking here
    // Example: gtag('event', 'form_interaction', { form_name: 'waitlist' });
}

// Listen for iframe load to track form views
document.addEventListener('DOMContentLoaded', () => {
    const formIframe = document.querySelector('.form-container iframe');
    
    if (formIframe) {
        formIframe.addEventListener('load', () => {
            console.log('Waitlist form loaded successfully');
            // Add your analytics tracking here
        });
    }
});
