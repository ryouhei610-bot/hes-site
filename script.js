// HES interactions
const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  toggle.setAttribute('aria-expanded', String(!open));
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
      nav.style.display = '';
      toggle?.setAttribute('aria-expanded','false');
    }
  });
});
// Year
document.getElementById('year').textContent = new Date().getFullYear();
