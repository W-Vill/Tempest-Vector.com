let logo = document.getElementById('logo');
let ship = document.getElementById('ship')

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    logo.style.marginTop = value * -1.5 + 'px';
    ship.style.marginLeft = value * 1.5 + 'px';
});