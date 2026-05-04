let logo = document.getElementById('logo');
let ship = document.getElementById('ship');

//scroll effect
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (logo) logo.style.marginTop = value * -1.5 + 'px';
    if (ship) ship.style.transform = `translateX(${value * 1.5}px)`;
});

// Page transition handlers
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
    // Trigger reflow to start transition
    document.body.offsetHeight;
});

window.addEventListener('beforeunload', () => {
    document.body.classList.add('fade-out');
});

// Smooth navigation for links (optional enhancement for internal nav)
document.querySelectorAll('a[href^="/pages/"], a[href^="/index.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
        document.body.classList.add('fade-out');
    });
});
