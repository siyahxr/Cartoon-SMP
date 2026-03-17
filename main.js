document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Cursor ---
    const dot = document.getElementById('custom-cursor');
    const outline = document.getElementById('custom-cursor-follower');
    
    let mx = 0, my = 0;
    let dx = 0, dy = 0;
    let ox = 0, oy = 0;

    window.addEventListener('mousemove', (e) => {
        mx = e.clientX; my = e.clientY;
    });

    const animate = () => {
        dx += (mx - dx) * 0.2;
        dy += (my - dy) * 0.2;
        dot.style.transform = `translate3d(${dx - 5}px, ${dy - 5}px, 0)`;

        ox += (mx - ox) * 0.1;
        oy += (my - oy) * 0.1;
        outline.style.transform = `translate3d(${ox - 20}px, ${oy - 20}px, 0)`;

        requestAnimationFrame(animate);
    };
    animate();

    // --- Navbar Effect ---
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // --- Copy IP ---
    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const ip = document.getElementById('ip-text').innerText;
            navigator.clipboard.writeText(ip).then(() => {
                const inner = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> <h4>COPIED!</h4>';
                setTimeout(() => { copyBtn.innerHTML = inner; }, 2000);
            });
        });
    }

    // --- Player Count ---
    const countEl = document.getElementById('player-count');
    if (countEl) {
        let current = 84;
        setInterval(() => {
            current += Math.floor(Math.random() * 5) - 2;
            if (current < 40) current = 40;
            countEl.innerText = current;
        }, 3000);
    }
});