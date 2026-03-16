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

// Initial count animation on load
window.addEventListener('load', () => {
    setTimeout(updateCount, 1000);
});

// Slideshow Functionality for Hero Section
const heroImages = [
    { src: 'assets/in-game.png', text: 'In-game footage • Spawn fly-through' },
    { src: 'assets/gallery-spawn.png', text: 'CN Spawn Hub • Meet the Legends' },
    { src: 'assets/gallery-market.png', text: 'Toon Market • Player Shops' },
    { src: 'assets/gallery-cherry.png', text: 'Adventure Forest • Exploration' }
];

let currentHeroIndex = 0;
const heroImgElement = document.querySelector('.in-game-img');
const heroTextElement = document.querySelector('.window-overlay-text');

function cycleHeroImages() {
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    
    // Add fade out effect
    heroImgElement.style.opacity = '0';
    
    setTimeout(() => {
        heroImgElement.src = heroImages[currentHeroIndex].src;
        heroTextElement.textContent = heroImages[currentHeroIndex].text;
        
        // Fade back in once src is changed
        heroImgElement.onload = () => {
            heroImgElement.style.opacity = '1';
        };
    }, 500);
}

// Start the cycle every 4 seconds
if (heroImgElement) {
    setInterval(cycleHeroImages, 4000);
}

// Mobile menu toggle (simple version)
document.querySelector('.menu-toggle').addEventListener('click', () => {
    alert('Mobile menu functionality can be added here!');
});
