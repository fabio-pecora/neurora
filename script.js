
// Mobile menu
const burger = document.querySelector('.burger');
if(burger){
  burger.addEventListener('click', ()=>{
    const existing = document.querySelector('.menu.mobile');
    if(existing){ existing.remove(); return; }
    const m = document.createElement('div');
    m.className = 'menu mobile';
    m.innerHTML = `<a href="index.html">Home</a><a href="about.html">About</a><a href="connect.html">Connect</a><a href="creator.html">Meet the Creator</a>`;
    document.querySelector('.nav').appendChild(m);
  });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); observer.unobserve(e.target); }});
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Tilt effect
document.querySelectorAll('.card[data-tilt]').forEach(card=>{
  const strength = 10;
  card.addEventListener('mousemove', e=>{
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -strength;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * strength;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

// Email assembly to reduce scraping
const emailAnchor = document.querySelector('[data-email-user]');
if(emailAnchor){
  const u = emailAnchor.getAttribute('data-email-user');
  const d = emailAnchor.getAttribute('data-email-domain');
  emailAnchor.href = `mailto:${u}@${d}?subject=Collaboration%20Request%20from%20Website&body=Hi%20Fabio%2C%20I%27d%20love%20to%20collaborate%20on...`;
}
