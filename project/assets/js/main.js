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



// DEVS SECTION FUNCTIONS
const total = 5;
let current = 2;

const positions = [
  { x: -300, scale: 0.42, z: 0, opacity: 0.45 },
  { x: -185, scale: 0.62, z: 1, opacity: 0.65 },
  { x: -95,  scale: 0.78, z: 2, opacity: 0.80 },
  { x: 0,    scale: 1.0,  z: 5, opacity: 1.00 },
  { x: 95,   scale: 0.78, z: 2, opacity: 0.80 },
  { x: 185,  scale: 0.62, z: 1, opacity: 0.65 },
  { x: 300,  scale: 0.42, z: 0, opacity: 0.45 },
];

const people = [
  { name: "Josh Arrieta",   role: "Game Designer",  lang: "Python, Java, JavaScript",   avatar: "" },
  { name: "Wency Jae Villegas",     role: "Game Developer",   lang: "Python, Java, JavaScript", avatar: "../assets/img/me.jpg" },
  { name: "Adrian Marquez",   role: "UI/UX Dev",    lang: "Figma", avatar: "" },
  { name: "Aldred Naranjo",     role: "UI/UX Dev",        lang: "Figma",  avatar: "" },
  { name: "Flint Yabes",     role: "UI/UX Dev",     lang: "Figma",   avatar: "" },
];

const purpleShades = [
  '#2d1541','#3d1e58','#4a2470','#5a2a82',
  '#4a2470','#3d1e58','#2d1541'
];

const track = document.getElementById('track');
const cards = [];

for (let i = 0; i < total; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.index = i;
  card.addEventListener('click', () => {
    const offset = i - current;
    if (offset !== 0) move(offset > 0 ? 1 : -1);
  });
  track.appendChild(card);
  cards.push(card);
}

function render() {
  cards.forEach((card, i) => {
    const posIdx = (i - current) + 3;
    if (posIdx < 0 || posIdx >= positions.length) {
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
      return;
    }
    const p = positions[posIdx];
    card.style.opacity = p.opacity;
    card.style.zIndex = p.z;
    card.style.pointerEvents = 'auto';
    card.style.transform = `translateX(${p.x}px) scale(${p.scale})`;
    card.style.background = purpleShades[posIdx];
    
    const person = people[i];
    const avatarHTML = person.avatar.startsWith('../')
  ? `<div style="
      width:100%; height: 100%;
      border-radius: 50%;
      background: url(${person.avatar}) center/cover;
      margin: 0 auto 8px;
    "></div>`
  : `<div style="font-size: 36px; margin-bottom: 8px;">${person.avatar}</div>`;


    card.innerHTML = `
    <div style="text-align:center; padding: 12px;">
    <div style="
      width: 300px; height: 300px;
      border-radius: 10%;
      background: url(${person.avatar}) center/cover;
      margin: 0 auto 8px;
      box-shadow: 0 0 15px 5px #0000006c;
    "></div>

      <div style="text-align:center; padding: 12px;">
        <div style="font-size: 40px; font-weight: 600;">${person.name}</div>
        <div style="font-size: 20px; opacity: 0.8; margin-top: 4px;">${person.role}</div>
        <div style="font-size: 20px; opacity: 0.6; margin-top: 2px;">${person.lang}</div>
      </div>
    `;

  });
}

function move(dir) {
  current = Math.max(0, Math.min(total - 1, current + dir));
  render();
}

render();
