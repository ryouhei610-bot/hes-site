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

// ==== Hero video fade & header behavior on scroll ====
(() => {
  const header = document.querySelector('.site-header');
  const hero   = document.querySelector('.hero');
  const video  = document.querySelector('.hero-video');

  // 早めに1回適用
  const apply = () => {
    const y = window.scrollY || 0;
    if (header) {
      if (y > 10) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    if (hero && video) {
      const h = hero.offsetHeight || 1;
      const t = Math.min(Math.max(y / (h * 0.6), 0), 1); // 0→1
      // 0.3〜1.0の間で不透明度を変化（CSSのtransitionで滑らかに）
      const opacity = 1 - 0.7 * t;
      video.style.opacity = String(opacity);
      // さらに下がったら dim クラスを付与（読みやすさアップ）
      if (t > 0.7) hero.classList.add('dim-video'); else hero.classList.remove('dim-video');
    }
  };

  // スクロール & リサイズで更新
  window.addEventListener('scroll', apply, {passive: true});
  window.addEventListener('resize', apply);
  document.addEventListener('DOMContentLoaded', apply);
  apply();

  // 動画の自動再生がブロックされた場合のケア
  if (video) {
    const tryPlay = () => { video.play().catch(()=>{}); };
    document.addEventListener('click', tryPlay, {once:true});
    document.addEventListener('touchstart', tryPlay, {once:true});
  }
})();
