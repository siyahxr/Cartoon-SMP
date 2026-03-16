// Copy IP Functionality
function copyIP() {
    const ip = document.getElementById('server-ip').textContent;
    navigator.clipboard.writeText(ip).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(5, 5, 16, 0.95)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.background = 'rgba(5, 5, 16, 0.6)';
    }
});

// Simple Player Count Animation
let currentCount = 0;
const targetCount = 142; // Example target
const speed = 20;

function updateCount() {
    const playerCount = document.getElementById('player-count');
    if (currentCount < targetCount) {
        currentCount += Math.ceil((targetCount - currentCount) / 10);
        playerCount.textContent = currentCount;
        setTimeout(updateCount, speed);
    } else {
        playerCount.textContent = targetCount;
    }
}

// Initial count animation on load
window.addEventListener('load', () => {
    setTimeout(updateCount, 1000);
});

// Mobile menu toggle (simple version)
document.querySelector('.menu-toggle').addEventListener('click', () => {
    alert('Mobile menu functionality can be added here!');
});
